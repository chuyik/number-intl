import { addLocaleData } from 'number-intl'
addLocaleData({
    "locale": "ff-Adlm",
    "number": {
        "nu": [
            "adlm",
            "latn"
        ],
        "patterns": {
            "decimal": {
                "pos": "{number}",
                "ne": "{minus}{number}"
            },
            "currency": {
                "pos": "{currency} {number}",
                "ne": "{minus}{currency} {number}"
            },
            "percent": {
                "pos": "{number}{percent}",
                "ne": "{minus}{number}{percent}"
            }
        },
        "symbols": {
            "adlm": {
                "decimal": ".",
                "group": "⹁",
                "nan": "𞤏𞤮𞤈",
                "plus": "+",
                "minus": "-",
                "percent": "%",
                "infinity": "∞"
            },
            "latn": {
                "decimal": ".",
                "group": "⹁",
                "nan": "𞤏𞤮𞤈",
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
            "PHP": "𞤆𞤆𞤖",
            "TWD": "NT$",
            "USD": "US$",
            "VND": "₫"
        }
    }
});