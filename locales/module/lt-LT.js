import { addLocaleData } from 'number-intl'
addLocaleData({
    "locale": "lt-LT",
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
                "nan": "NaN",
                "plus": "+",
                "minus": "−",
                "percent": "%",
                "infinity": "∞"
            }
        },
        "currencies": {
            "CNY": {
                "narrow": "¥"
            },
            "EUR": {
                "narrow": "€",
                "symbol": "€"
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
                "narrow": "$"
            },
            "USD": {
                "narrow": "$"
            },
            "VND": {
                "narrow": "VND"
            }
        }
    }
});