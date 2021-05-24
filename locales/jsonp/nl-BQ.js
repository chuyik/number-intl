!(function (e, a) {
    module.exports = a(require('number-intl'))
  })(this, function (e) {
    return e.addLocaleData({
    "locale": "nl-BQ",
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
                "pos": "{currency} {number}",
                "ne": "{currency} {minus}{number}"
            },
            "percent": {
                "pos": "{number}{percent}",
                "ne": "{minus}{number}{percent}"
            }
        },
        "symbols": {
            "latn": {
                "decimal": ",",
                "group": ".",
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
            "THB": "฿",
            "TWD": "NT$",
            "USD": "$",
            "VND": "₫"
        }
    }
});
  });