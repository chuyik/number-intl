!(function (e, a) {
    module.exports = a(require('number-intl'))
  })(this, function (e) {
    return e.addLocaleData({
    "locale": "tk-TM",
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
                "nan": "san däl",
                "plus": "+",
                "minus": "-",
                "percent": "%",
                "infinity": "∞"
            }
        },
        "currencies": {
            "CNY": "CN¥",
            "HKD": "HK$",
            "TWD": "NT$",
            "USD": "US$",
            "VND": "₫"
        }
    }
});
  });