import { addLocaleData } from 'number-intl'
addLocaleData({
    "locale": "ms-SG",
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
            }
        },
        "symbols": {
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
                "narrow": "RM",
                "symbol": "RM"
            },
            "PHP": {
                "narrow": "₱"
            },
            "SGD": {
                "narrow": "$",
                "symbol": "$"
            },
            "THB": {
                "narrow": "฿"
            },
            "TWD": {
                "narrow": "NT$",
                "symbol": "NT$"
            },
            "USD": {
                "narrow": "$"
            },
            "VND": {
                "narrow": "₫",
                "symbol": "₫"
            }
        }
    }
});