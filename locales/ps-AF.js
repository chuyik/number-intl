!(function (e, a) {
    module.exports = a(require('number-intl/build/main/lib/locale'))
  })(this, function (e) {
    return e.addLocaleData({
    "locale": "ps-AF",
    "number": {
        "nu": [
            "arabext",
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
            "arabext": {
                "decimal": "٫",
                "group": "٬",
                "nan": "NaN",
                "plus": "‎+‎",
                "minus": "‎-‎",
                "percent": "٪",
                "infinity": "∞"
            },
            "latn": {
                "decimal": ",",
                "group": ".",
                "nan": "NaN",
                "plus": "‎+",
                "minus": "‎−",
                "percent": "%",
                "infinity": "∞"
            }
        },
        "currencies": {
            "CNY": "CN¥",
            "EUR": "€",
            "HKD": "HK$",
            "TWD": "NT$",
            "USD": "$",
            "VND": "₫"
        }
    }
});
  });