!(function (e, a) {
    module.exports = a(require('number-intl'))
  })(this, function (e) {
    return e.addLocaleData({
    "locale": "ff-Adlm-NG",
    "number": {
        "nu": [
            "adlm",
            "latn"
        ],
        "patterns": {
            "decimal": {
                "pos": "{number}",
                "ne": "{minus}{number}"
            },
            "currency": {
                "pos": "{currency}Â {number}",
                "ne": "{minus}{currency}Â {number}"
            },
            "percent": {
                "pos": "{number}{percent}",
                "ne": "{minus}{number}{percent}"
            }
        },
        "symbols": {
            "adlm": {
                "decimal": ".",
                "group": "â¹",
                "nan": "ð¤ð¤®ð¤",
                "plus": "+",
                "minus": "-",
                "percent": "%",
                "infinity": "â"
            },
            "latn": {
                "decimal": ".",
                "group": "â¹",
                "nan": "ð¤ð¤®ð¤",
                "plus": "+",
                "minus": "-",
                "percent": "%",
                "infinity": "â"
            }
        },
        "currencies": {
            "CNY": {
                "narrow": "Â¥",
                "symbol": "CNÂ¥"
            },
            "EUR": {
                "narrow": "â¬",
                "symbol": "â¬"
            },
            "HKD": {
                "narrow": "$",
                "symbol": "HK$"
            },
            "IDR": {
                "narrow": "Rp"
            },
            "MYR": {
                "narrow": "RM"
            },
            "PHP": {
                "narrow": "â±",
                "symbol": "ð¤ð¤ð¤"
            },
            "SGD": {
                "narrow": "$"
            },
            "THB": {
                "narrow": "à¸¿"
            },
            "TWD": {
                "narrow": "$",
                "symbol": "NT$"
            },
            "USD": {
                "narrow": "$",
                "symbol": "US$"
            },
            "VND": {
                "narrow": "â«",
                "symbol": "â«"
            }
        }
    }
});
  });