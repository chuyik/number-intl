import { addLocaleData } from 'number-intl'
addLocaleData({
    "locale": "ce-RU",
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
                "decimal": ".",
                "group": ",",
                "nan": "Терхьаш дац",
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
                "narrow": "$",
                "symbol": "NT$"
            },
            "USD": {
                "narrow": "$",
                "symbol": "US$"
            },
            "VND": {
                "narrow": "₫",
                "symbol": "₫"
            }
        }
    }
});