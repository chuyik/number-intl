!(function (e, a) {
    module.exports = a(require('number-intl'))
  })(this, function (e) {
    return e.addLocaleData({
    "locale": "fi-FI",
    "number": {
        "nu": [
            "latn"
        ],
        "patterns": {
            "decimal": {
                "pos": "{number}",
                "ne": "{minus}{number}"
            },
            "currency": {
                "pos": "{number} {currency}",
                "ne": "{minus}{number} {currency}"
            },
            "percent": {
                "pos": "{number} {percent}",
                "ne": "{minus}{number} {percent}"
            }
        },
        "symbols": {
            "latn": {
                "decimal": ",",
                "group": " ",
                "nan": "epäluku",
                "plus": "+",
                "minus": "−",
                "percent": "%",
                "infinity": "∞"
            }
        },
        "currencies": {
            "CNY": {
                "narrow": "CNY"
            },
            "EUR": {
                "narrow": "€",
                "symbol": "€"
            },
            "HKD": {
                "narrow": "HKD"
            },
            "IDR": {
                "narrow": "IDR"
            },
            "MYR": {
                "narrow": "MYR"
            },
            "PHP": {
                "narrow": "PHP"
            },
            "SGD": {
                "narrow": "SGD"
            },
            "THB": {
                "narrow": "THB"
            },
            "TWD": {
                "narrow": "TWD"
            },
            "USD": {
                "narrow": "$",
                "symbol": "$"
            },
            "VND": {
                "narrow": "VND"
            }
        }
    }
});
  });