let locale = 'en';

export const LOCALE_MAP: Record<string, LOCALE_DATA> = {};

export function addLocaleData(localeData: LOCALE_DATA): void {
  LOCALE_MAP[localeData.locale] = localeData;
}

export function getLocaleData(key = locale): LOCALE_DATA {
  const localeData = LOCALE_MAP[key];
  if (!LOCALE_MAP[key]) {
    throw new Error(`locale "${key}" not found`);
  }
  return localeData;
}

export function setLocale(key: string): void {
  if (key === locale) return;
  if (getLocaleData(key)) {
    locale = key;
  }
}

export function getLocale(): string {
  return locale;
}
