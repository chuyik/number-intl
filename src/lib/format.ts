import { getLocaleData } from './locale';
import { parseNumber } from './parse';

const K_SEP_REGEX = /\B(?=(\d{3})+(?!\d))/g;

export interface FormatOptions {
  style?: 'decimal' | 'currency' | 'percent';
  nu?: 'latn';
  currency?: string;
  useGrouping?: boolean;
  currencyDisplay?: 'symbol' | 'narrowSymbol';
}

export function format(
  number: number | string,
  {
    style = 'decimal',
    nu = 'latn',
    currency,
    useGrouping,
    currencyDisplay = 'narrowSymbol',
  }: FormatOptions = {}
): string {
  const num = parseNumber(number);
  const localeData = getLocaleData();

  const { patterns, symbols, currencies } = localeData.number;
  const symbol = symbols[nu];
  if (isNaN(num)) return symbol.nan;

  const pattern = patterns[style];
  const pat = num >= 0 ? pattern.pos : pattern.ne;

  let [integer, decimal = ''] = String(Math.abs(num)).split('.');

  if (useGrouping) {
    integer = integer.replace(K_SEP_REGEX, symbol.group);
  }

  if (currency) {
    const currencyData = currencies[currency];
    if (currencyData) {
      switch (currencyDisplay) {
        case 'symbol':
          currency = currencyData.symbol || currency;
          break;
        case 'narrowSymbol':
          currency = currencyData.narrow;
          break;
        default:
          break;
      }
    }
  }

  return pat
    .replace('{number}', `${integer}${symbol.decimal}${decimal}`)
    .replace('{minus}', symbol.minus)
    .replace('{percent}', symbol.percent)
    .replace('{currency}', currency || '');
}
