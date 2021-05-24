import { addLocaleData } from 'number-intl'
addLocaleData({
    "locale": "fa-IR",
    "number": {
        "nu": [
            "arabext",
            "latn"
        ],
        "patterns": {
            "decimal": {
                "pos": "{number}",
                "ne": "{minus}{number}"
            },
            "currency": {
                "pos": "‎{currency}{number}",
                "ne": "{minus}‎{currency}{number}"
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
                "nan": "ناعدد",
                "plus": "‎+",
                "minus": "‎−",
                "percent": "٪",
                "infinity": "∞"
            },
            "latn": {
                "decimal": ".",
                "group": ",",
                "nan": "ناعدد",
                "plus": "‎+",
                "minus": "‎−",
                "percent": "%",
                "infinity": "∞"
            }
        },
        "currencies": {
            "CNY": "¥CN",
            "EUR": "€",
            "HKD": "$HK",
            "THB": "฿",
            "TWD": "NT$",
            "USD": "$",
            "VND": "₫"
        }
    }
});