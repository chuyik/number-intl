import { addLocaleData } from 'number-intl'
addLocaleData({
    "locale": "uz-Latn",
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
                "nan": "son emas",
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