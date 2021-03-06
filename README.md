# number-intl

Tiny number formatter with Intl support, tailored CLDR data and tree-shaking ready.

## Install

```bash
yarn add number-intl
```

## Usage

```ts
import { setLocale, format } from 'number-intl';

// import locale data on demand
import 'number-intl/locales/module/en';
import 'number-intl/locales/module/zh-Hans';
import 'number-intl/locales/module/id';

// set current locale to indonesian
setLocale('id');

// format number like to string
format(3.14); // --> 3,14
format(3.14, { style: 'currency', currency: 'CNY' }); // --> CN¥3,14
format('31415926.31415926', { useGrouping: true }); // --> 31.415.926,31415926
```
