export function parseNumber(num: number | string): number {
  if (typeof num === 'string') {
    return parseFloat(num);
  } else {
    return num;
  }
}
