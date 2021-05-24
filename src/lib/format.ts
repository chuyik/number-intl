import { getLocaleData } from './locale';
import { parseNumber } from './parse';

const K_SEP_REGEX = /\B(?=(\d{3})+(?!\d))/g;

export function format(
  number: number | string,
  {
    style = 'decimal',
    nu = 'latn',
    currency,
    useGrouping,
  }: {
    style?: 'decimal' | 'currency' | 'percent';
    nu?: 'latn';
    currency?: string;
    useGrouping?: boolean;
  } = {}
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

  return pat
    .replace('{number}', `${integer}${symbol.decimal}${decimal}`)
    .replace('{minus}', symbol.minus)
    .replace('{percent}', symbol.percent)
    .replace(
      '{currency}',
      (currency && currencies[currency]) || currency || ''
    );
}
