!(function (e, a) {
    module.exports = a(require('number-intl/lib/locale'))
  })(this, function (e) {
    return e.addLocaleData({
    "locale": "ka",
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
                "pos": "{number}{percent}",
                "ne": "{minus}{number}{percent}"
            }
        },
        "symbols": {
            "latn": {
                "decimal": ",",
                "group": " ",
                "nan": "არ არის რიცხვი",
                "plus": "+",
                "minus": "-",
                "percent": "%",
                "infinity": "∞"
            }
        },
        "currencies": {
            "EUR": "€",
            "TWD": "NT$",
            "USD": "US$"
        }
    }
});
  });