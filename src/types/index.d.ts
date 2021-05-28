interface LOCALE_DATA {
  locale: string;
  number: {
    nu: ['latn'];
    patterns: {
      decimal: {
        pos: string;
        ne: string;
      };
      currency: {
        pos: string;
        ne: string;
      };
      percent: {
        pos: string;
        ne: string;
      };
    };
    symbols: {
      latn: {
        decimal: string;
        group: string;
        nan: string;
        plus: string;
        minus: string;
        percent: string;
        infinity: string;
      };
    };
    currencies: Record<
      string,
      {
        symbol?: string;
        narrow?: string;
      }
    >;
  };
}
