!(function (e, a) {
    module.exports = a(require('number-intl/lib/locale'))
  })(this, function (e) {
    return e.addLocaleData({
    "locale": "dz",
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
            "CNY": "CN¥",
            "EUR": "€",
            "HKD": "HK$",
            "THB": "TH฿",
            "TWD": "NT$",
            "USD": "US$",
            "VND": "₫"
        }
    }
});
  });