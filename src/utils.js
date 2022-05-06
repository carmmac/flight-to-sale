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
  getTotalFlightDuration,
  sortByPriceMax,
  sortByPriceMin,
  sortByTimeMin,
};
