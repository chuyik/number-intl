const fs = require('fs');
const path = require('path');

const reduceLocaleData = require('./reduce');
const extractNumbersFields = require('./extract-numbers');
const { getAllLocales } = require('./cldr');

function mergeData(...sources) {
  return sources.reduce((data, source) => {
    Object.keys(source || {}).forEach((locale) => {
      data[locale] = Object.assign(data[locale] || {}, source[locale]);
    });

    return data;
  }, {});
}

// -----------------------------------------------------------------------------

const LOCALE_DIR = path.join(__dirname, '../locales');
const LOCALE_JSON_DIR = path.join(LOCALE_DIR, 'json');
const LOCALE_JSONP_DIR = path.join(LOCALE_DIR, 'jsonp');
const LOCALE_MODULE_DIR = path.join(LOCALE_DIR, 'module');
fs.mkdirSync(LOCALE_DIR, { recursive: true });
fs.mkdirSync(LOCALE_JSON_DIR, { recursive: true });
fs.mkdirSync(LOCALE_JSONP_DIR, { recursive: true });
fs.mkdirSync(LOCALE_MODULE_DIR, { recursive: true });

// extracting data into CLDR

// Default to all CLDR locales.
const locales = getAllLocales();

// Each type of data has the structure: `{"<locale>": {"<key>": <value>}}`,
// which is well suited for merging into a single object per locale. This
// performs that deep merge and returns the aggregated result.
const locData = mergeData(extractNumbersFields(locales));

const locStringData = {};

Object.keys(locData).forEach((locale) => {
  // Ignore en-US-POSIX and root
  if (locale.toLowerCase() === 'en-us-posix') {
    return;
  }

  const obj = reduceLocaleData(locale, locData[locale]);
  locStringData[locale] = JSON.stringify(obj, null, 4);
  fs.writeFileSync(
    path.join(LOCALE_JSON_DIR, locale + '.json'),
    locStringData[locale]
  );

  const { name } = require('../package.json');
  fs.writeFileSync(
    path.join(LOCALE_JSONP_DIR, locale + '.js'),
    `!(function (e, a) {
    module.exports = a(require('${name}'))
  })(this, function (e) {
    return e.addLocaleData(${locStringData[locale]});
  });`
  );

  fs.writeFileSync(
    path.join(LOCALE_MODULE_DIR, locale + '.js'),
    `import { addLocaleData } from 'number-intl'
addLocaleData(${locStringData[locale]});`
  );
});

console.log('Total number of locales is ' + Object.keys(locData).length);
