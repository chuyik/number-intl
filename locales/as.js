!(function (e, a) {
    module.exports = a(require('number-intl/build/main/lib/locale'))
  })(this, function (e) {
    return e.addLocaleData({
    "locale": "as",
    "number": {
        "nu": [
            "beng",
            "latn"
        ],
        "patterns": {
            "decimal": {
                "pos": "{number}",
                "ne": "{minus}{number}"
            },
            "currency": {
                "pos": "{currency} {number}",
                "ne": "{minus}{currency} {number}"
            },
            "percent": {
                "pos": "{number}{percent}",
                "ne": "{minus}{number}{percent}"
            },
            "secondaryGroupSize": 2
        },
        "symbols": {
            "beng": {
                "decimal": ".",
                "group": ",",
                "nan": "NaN",
                "plus": "+",
                "minus": "-",
                "percent": "%",
                "infinity": "∞"
            },
            "latn": {
                "decimal": ".",
                "group": ",",
                "nan": "NaN",
                "plus": "+",
                "minus": "-",
                "percent": "%",
                "infinity": "∞"
            }
        },
        "currencies": {
            "CNY": "CN¥",
            "EUR": "€",
            "HKD": "HK$",
            "TWD": "NT$",
            "USD": "US$",
            "VND": "₫"
        }
    }
});
  });