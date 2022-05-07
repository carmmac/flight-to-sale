/* Constant vars */

const CARDS_PER_PAGE_LIMIT = 10;
const CARRIER_LABEL_LENGTH_MAX = 14;
const RUB_SHORTHAND = 'р.';
const AIRLINE_LOGO_URL = 'http://pics.avs.io/99/36/';

const Currency = {
  RUB: {
    CURRENCY_CODE: 'RUB',
    SYMBOL: '\u20BD',
  },
  USD: {
    CURRENCY_CODE: 'USD',
    SYMBOL: '\u0024',
  },
  EUR: {
    CURRENCY_CODE: 'EUR',
    SYMBOL: '\u20AC',
  },
};

const Sorting = {
  PRICE_ASC: {
    label: 'по возростанию цены',
    value: 'priceAsc',
  },
  PRICE_DESC: {
    label: 'по убыванию цены',
    value: 'priceDesc',
  },
  TIME_ASC: {
    label: 'самые быстрые',
    value: 'timeAsc',
  },
};

const Filter = {
  TRANSFERS: {
    SINGLE: {
      label: '1 пересадка',
      name: 'filter-transfer-single',
    },
    ZERO: {
      label: 'без пересадок',
      name: 'filter-transfer-zero',
    },
  },
  CARRIER: {
    label: '',
    value: '',
  },
};

const DateFormat = {
  DATE: 'DD MMM ddd',
  TIME: 'HH:mm',
};

export {
  CARDS_PER_PAGE_LIMIT,
  CARRIER_LABEL_LENGTH_MAX,
  RUB_SHORTHAND,
  AIRLINE_LOGO_URL,
  Currency,
  Sorting,
  Filter,
  DateFormat,
};
