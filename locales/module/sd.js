import { addLocaleData } from 'number-intl'
addLocaleData({
    "locale": "sd",
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
                "nan": "NaN",
                "plus": "؜+",
                "minus": "؜-",
                "percent": "٪؜",
                "infinity": "∞"
            },
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
            "TWD": "NT$",
            "USD": "US$",
            "VND": "₫"
        }
    }
});