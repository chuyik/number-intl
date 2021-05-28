import { addLocaleData } from 'number-intl'
addLocaleData({
    "locale": "ar-SY",
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
                "nan": "ليس رقم",
                "plus": "؜+",
                "minus": "؜-",
                "percent": "٪؜",
                "infinity": "∞"
            },
            "latn": {
                "decimal": ".",
                "group": ",",
                "nan": "ليس رقمًا",
                "plus": "‎+",
                "minus": "‎-",
                "percent": "‎%‎",
                "infinity": "∞"
            }
        },
        "currencies": {
            "CNY": {
                "narrow": "CN¥",
                "symbol": "CN¥"
            },
            "EUR": {
                "narrow": "€",
                "symbol": "€"
            },
            "HKD": {
                "narrow": "HK$",
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
                "narrow": "US$",
                "symbol": "US$"
            },
            "VND": {
                "narrow": "₫",
                "symbol": "₫"
            }
        }
    }
});