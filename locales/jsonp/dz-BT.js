!(function (e, a) {
    module.exports = a(require('number-intl'))
  })(this, function (e) {
    return e.addLocaleData({
    "locale": "dz-BT",
    "number": {
        "nu": [
            "tibt",
            "latn"
        ],
        "patterns": {
            "decimal": {
                "pos": "{number}",
                "ne": "{minus}{number}"
            },
            "currency": {
                "pos": "{currency}{number}",
                "ne": "{minus}{currency}{number}"
            },
            "percent": {
                "pos": "{number} {percent}",
                "ne": "{minus}{number} {percent}"
            },
            "secondaryGroupSize": 2
        },
        "symbols": {
            "latn": {
                "decimal": ".",
                "group": ",",
                "nan": "NaN",
                "plus": "+",
                "minus": "-",
                "percent": "%",
                "infinity": "∞"
            },
            "tibt": {
                "decimal": ".",
                "group": ",",
                "nan": "ཨང་མད",
                "plus": "+",
                "minus": "-",
                "percent": "%",
                "infinity": "གྲངས་མེད"
            }
        },
        "currencies": {
            "CNY": {
                "narrow": "¥",
                "symbol": "CN¥"
            },
            "EUR": {
                "narrow": "€",
                "symbol": "€"
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
                "narrow": "₱"
            },
            "SGD": {
                "narrow": "$"
            },
            "THB": {
                "narrow": "฿",
                "symbol": "TH฿"
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
                "narrow": "₫",
                "symbol": "₫"
            }
        }
    }
});
  });