import { addLocaleData } from 'number-intl'
addLocaleData({
    "locale": "sq",
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
                "nan": "NaN",
                "plus": "+",
                "minus": "-",
                "percent": "%",
                "infinity": "∞"
            }
        },
        "currencies": {
            "CNY": {
                "narrow": "CNY",
                "symbol": "CN¥"
            },
            "EUR": {
                "narrow": "EUR",
                "symbol": "€"
            },
            "HKD": {
                "narrow": "HKS",
                "symbol": "HK$"
            },
            "IDR": {
                "narrow": "IDR"
            },
            "MYR": {
                "narrow": "MYR"
            },
            "PHP": {
                "narrow": "PHP"
            },
            "SGD": {
                "narrow": "SGD"
            },
            "THB": {
                "narrow": "THB",
                "symbol": "฿"
            },
            "TWD": {
                "narrow": "TWD",
                "symbol": "NT$"
            },
            "USD": {
                "narrow": "USD",
                "symbol": "US$"
            },
            "VND": {
                "narrow": "VND",
                "symbol": "₫"
            }
        }
    }
});