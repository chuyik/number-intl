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
fs.mkdirSync(LOCALE_DIR, { recursive: true });

// extracting data into CLDR

// Default to all CLDR locales.
const locales = getAllLocales();

// Each type of data has the structure: `{"<locale>": {"<key>": <value>}}`,
// which is well suited for merging into a single object per locale. This
// performs that deep merge and returns the aggregated result.
let locData = mergeData(extractNumbersFields(locales));

let locStringData = {};

Object.keys(locData).forEach((locale) => {
  // Ignore en-US-POSIX and root
  if (locale.toLowerCase() === 'en-us-posix') {
    return;
  }

  const obj = reduceLocaleData(locale, locData[locale]);
  locStringData[locale] = JSON.stringify(obj, null, 4);
  fs.writeFileSync(
    path.join(LOCALE_DIR, locale + '.json'),
    locStringData[locale]
  );

  const { name } = require('../package.json');
  fs.writeFileSync(
    path.join(LOCALE_DIR, locale + '.js'),
    `!(function (e, a) {
    module.exports = a(require('${name}/build/main/lib/locale'))
  })(this, function (e) {
    return e.addLocaleData(${locStringData[locale]});
  });`
  );
});

console.log('Total number of locales is ' + Object.keys(locData).length);
