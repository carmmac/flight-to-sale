import { Currency } from './const';

const getFlightPriceParam = (selectedCurrency, flight) => {
  switch (selectedCurrency) {
    case Currency.RUB.CURRENCY_CODE:
      return flight.price.total.amount;
    case Currency.EUR.CURRENCY_CODE:
      return flight.price.rates.totalEur.amount;
    case Currency.USD.CURRENCY_CODE:
      return flight.price.rates.totalUsd.amount;
    default:
      return {};
  }
};

const getTotalFlightDuration = ({ flight }) => flight.legs
  .reduce((prev, next) => prev.duration + next.duration);

const sortByPriceMax = (a, b) => b.flight.price.total.amount - a.flight.price.total.amount;

const sortByPriceMin = (a, b) => a.flight.price.total.amount - b.flight.price.total.amount;

const sortByTimeMin = (a, b) => {
  const totalDurationA = getTotalFlightDuration(a);
  const totalDurationB = getTotalFlightDuration(b);

  return totalDurationA - totalDurationB;
};

export {
  getFlightPriceParam,
  getTotalFlightDuration,
  sortByPriceMax,
  sortByPriceMin,
  sortByTimeMin,
};
