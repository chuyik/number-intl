import { addLocaleData } from 'number-intl'
addLocaleData({
    "locale": "gu-IN",
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
            },
            "secondaryGroupSize": 2
        },
        "symbols": {
            "gujr": {
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