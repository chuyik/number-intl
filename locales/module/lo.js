import { addLocaleData } from 'number-intl'
addLocaleData({
    "locale": "lo",
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
                "ne": "{currency}{minus}{number}"
            },
            "percent": {
                "pos": "{number}{percent}",
                "ne": "{minus}{number}{percent}"
            }
        },
        "symbols": {
            "laoo": {
                "decimal": ",",
                "group": ".",
                "nan": "ບໍ່​ແມ່ນ​ໂຕ​ເລກ",
                "plus": "+",
                "minus": "-",
                "percent": "%",
                "infinity": "∞"
            },
            "latn": {
                "decimal": ",",
                "group": ".",
                "nan": "ບໍ່​ແມ່ນ​ໂຕ​ເລກ",
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