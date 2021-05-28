/* eslint-disable @typescript-eslint/no-var-requires */
import { addLocaleData, format, setLocale } from '../index';

addLocaleData(require('../../locales/json/en.json'));
addLocaleData(require('../../locales/json/zh-Hans.json'));
addLocaleData(require('../../locales/json/id.json'));

describe('en', () => {
  beforeEach(() => {
    setLocale('en');
  });
  test('decimal', () => {
    expect(format(NaN)).toBe('NaN');
    expect(format('3.14')).toBe('3.14');
    expect(format('-3.14')).toBe('-3.14');
    expect(format('-3.1415926', { useGrouping: true })).toBe('-3.1415926');
    expect(format('-31415926.31415926', { useGrouping: true })).toBe(
      '-31,415,926.31415926'
    );
  });
  test('currency', () => {
    expect(
      format('3.14', {
        style: 'currency',
        currency: 'CNY',
        currencyDisplay: 'symbol',
      })
    ).toBe('CN¥3.14');
    expect(
      format('-3.14', {
        style: 'currency',
        currency: 'CNY',
        currencyDisplay: 'symbol',
      })
    ).toBe('-CN¥3.14');
    expect(
      format('3.14', {
        style: 'currency',
        currency: 'CNY',
        currencyDisplay: 'narrowSymbol',
      })
    ).toBe('¥3.14');
    expect(
      format('-3.14', {
        style: 'currency',
        currency: 'CNY',
        currencyDisplay: 'narrowSymbol',
      })
    ).toBe('-¥3.14');
  });
  test('percent', () => {
    expect(format('3.14', { style: 'percent' })).toBe('3.14%');
  });
});

describe('zh-Hans', () => {
  beforeEach(() => {
    setLocale('zh-Hans');
  });
  test('decimal', () => {
    expect(format(NaN)).toBe('NaN');
    expect(format('3.14')).toBe('3.14');
    expect(format('-3.14')).toBe('-3.14');
    expect(format('-3.1415926', { useGrouping: true })).toBe('-3.1415926');
    expect(format('-31415926.31415926', { useGrouping: true })).toBe(
      '-31,415,926.31415926'
    );
  });
  test('currency', () => {
    expect(format('3.14', { style: 'currency', currency: 'CNY' })).toBe(
      '¥3.14'
    );
    expect(format('-3.14', { style: 'currency', currency: 'CNY' })).toBe(
      '-¥3.14'
    );
  });
  test('percent', () => {
    expect(format('3.14', { style: 'percent' })).toBe('3.14%');
  });
});

describe('id', () => {
  beforeEach(() => {
    setLocale('id');
  });
  test('decimal', () => {
    expect(format(NaN)).toBe('NaN');
    expect(format('3.14')).toBe('3,14');
    expect(format('-3.14')).toBe('-3,14');
    expect(format('-3.1415926', { useGrouping: true })).toBe('-3,1415926');
    expect(format('-31415926.31415926', { useGrouping: true })).toBe(
      '-31.415.926,31415926'
    );
  });
  test('currency', () => {
    expect(
      format('3.14', {
        style: 'currency',
        currency: 'IDR',
        currencyDisplay: 'symbol',
      })
    ).toBe('Rp3,14');
    expect(
      format('-3.14', {
        style: 'currency',
        currency: 'IDR',
        currencyDisplay: 'symbol',
      })
    ).toBe('-Rp3,14');
    expect(
      format('3.14', {
        style: 'currency',
        currency: 'IDR',
        currencyDisplay: 'narrowSymbol',
      })
    ).toBe('Rp3,14');
    expect(
      format('-3.14', {
        style: 'currency',
        currency: 'IDR',
        currencyDisplay: 'narrowSymbol',
      })
    ).toBe('-Rp3,14');
  });
  test('percent', () => {
    expect(format('3.14', { style: 'percent' })).toBe('3,14%');
  });
});
