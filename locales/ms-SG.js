!(function (e, a) {
    module.exports = a(require('number-intl/lib/locale'))
  })(this, function (e) {
    return e.addLocaleData({
    "locale": "ms-SG",
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
                "pos": "{currency}{number}",
                "ne": "{minus}{currency}{number}"
            },
            "percent": {
                "pos": "{number}{percent}",
                "ne": "{minus}{number}{percent}"
            }
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
            }
        },
        "currencies": {
            "CNY": "CN¥",
            "EUR": "€",
            "HKD": "HK$",
            "MYR": "RM",
            "SGD": "$",
            "TWD": "NT$",
            "VND": "₫"
        }
    }
});
  });