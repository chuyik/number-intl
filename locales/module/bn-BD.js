import { addLocaleData } from 'number-intl'
addLocaleData({
    "locale": "bn-BD",
    "number": {
        "nu": [
            "beng",
            "latn"
        ],
        "patterns": {
            "decimal": {
                "pos": "{number}",
                "ne": "{minus}{number}"
            },
            "currency": {
                "pos": "{number}{currency}",
                "ne": "{minus}{number}{currency}"
            },
            "percent": {
                "pos": "{number}{percent}",
                "ne": "{minus}{number}{percent}"
            }
        },
        "symbols": {
            "beng": {
                "decimal": ".",
                "group": ",",
                "nan": "NaN",
                "plus": "+",
                "minus": "-",
                "percent": "%",
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
            "THB": "฿",
            "TWD": "NT$",
            "USD": "US$",
            "VND": "₫"
        }
    }
});