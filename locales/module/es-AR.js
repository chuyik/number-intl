import { addLocaleData } from 'number-intl'
addLocaleData({
    "locale": "es-AR",
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
                "ne": "{minus}{currency} {number}"
            },
            "percent": {
                "pos": "{number} {percent}",
                "ne": "{minus}{number} {percent}"
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
            "CNY": {
                "narrow": "¥"
            },
            "EUR": {
                "narrow": "€"
            },
            "HKD": {
                "narrow": "$"
            },
            "IDR": {
                "narrow": "Rp"
            },
            "MYR": {
                "narrow": "RM"
            },
            "PHP": {
                "narrow": "₱"
            },
            "SGD": {
                "narrow": "$"
            },
            "THB": {
                "narrow": "฿"
            },
            "TWD": {
                "narrow": "NT$"
            },
            "USD": {
                "narrow": "$",
                "symbol": "US$"
            },
            "VND": {
                "narrow": "₫"
            }
        }
    }
});