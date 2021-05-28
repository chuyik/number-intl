import { addLocaleData } from 'number-intl'
addLocaleData({
    "locale": "ur",
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
                "percent": "%",
                "infinity": "∞"
            },
            "latn": {
                "decimal": ".",
                "group": ",",
                "nan": "NaN",
                "plus": "‎+",
                "minus": "‎-",
                "percent": "%",
                "infinity": "∞"
            }
        },
        "currencies": {
            "CNY": {
                "narrow": "¥",
                "symbol": "CN¥"
            },
            "EUR": {
                "narrow": "€",
                "symbol": "€"
            },
            "HKD": {
                "narrow": "$",
                "symbol": "HK$"
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
                "narrow": "฿",
                "symbol": "฿"
            },
            "TWD": {
                "narrow": "NT$",
                "symbol": "NT$"
            },
            "USD": {
                "narrow": "$",
                "symbol": "$"
            },
            "VND": {
                "narrow": "₫",
                "symbol": "₫"
            }
        }
    }
});