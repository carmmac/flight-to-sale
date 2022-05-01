/* Constant vars */

const CARDS_PER_PAGE_LIMIT = 50;
const CARRIER_LABEL_LENGTH_MAX = 14;

const Currency = {
  RUB: 'RUB',
  USD: 'USD',
  EUR: 'EUR',
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
    value: 'time_asc',
  },
};

const DateFormat = {
  DATE: 'DD MMM ddd',
  TIME: 'HH:mm',
};

export {
  CARDS_PER_PAGE_LIMIT,
  CARRIER_LABEL_LENGTH_MAX,
  Currency,
  Sorting,
  DateFormat,
};
