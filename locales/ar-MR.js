!(function (e, a) {
    module.exports = a(require('number-intl/build/main/lib/locale'))
  })(this, function (e) {
    return e.addLocaleData({
    "locale": "ar-MR",
    "number": {
        "nu": [
            "arab",
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
            "arab": {
                "decimal": "٫",
                "group": "٬",
                "nan": "ليس رقم",
                "plus": "؜+",
                "minus": "؜-",
                "percent": "٪؜",
                "infinity": "∞"
            },
            "latn": {
                "decimal": ",",
                "group": ".",
                "nan": "ليس رقمًا",
                "plus": "‎+",
                "minus": "‎-",
                "percent": "‎%‎",
                "infinity": "∞"
            }
        },
        "currencies": {
            "CNY": "CN¥",
            "EUR": "€",
            "HKD": "HK$",
            "THB": "฿",
            "TWD": "NT$",
            "USD": "US$",
            "VND": "₫"
        }
    }
});
  });