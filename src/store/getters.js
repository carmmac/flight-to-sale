import { CARDS_PER_PAGE_LIMIT, Sorting } from '@/const';
import { State } from './state';

const GetterType = {
  GET_VISIBLE_FLIGHTS: 'getVisibleFlights',
  GET_TOTAL_FLIGHTS_NUM: 'getTotalFlightsNum',
  GET_CARRIERS_LIST: 'getCarriersList',
};

const getters = {
  [GetterType.GET_VISIBLE_FLIGHTS](state) {
    const flights = state[State.FLIGHTS].slice();

    switch (state[State.CURRENT_SORTING]) {
      case Sorting.PRICE_DESC.value:
        flights.sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount);
        break;
      case Sorting.PRICE_ASC.value:
        flights.sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount);
        break;
      case Sorting.TIME_ASC.value:
        flights.sort((a, b) => {
          const totalDurationA = a.flight.legs.reduce(
            (prev, next) => prev.duration + next.duration,
          );
          const totalDurationB = b.flight.legs.reduce(
            (prev, next) => prev.duration + next.duration,
          );
          return totalDurationA - totalDurationB;
        });
        break;
      default:
        break;
    }

    return flights.slice(0, CARDS_PER_PAGE_LIMIT);
  },
  [GetterType.GET_TOTAL_FLIGHTS_NUM]: (state) => state[State.FLIGHTS].length,
  [GetterType.GET_CARRIERS_LIST]: (state) => {
    const carriers = state[State.FLIGHTS]
      /* Адаптация формата данных */
      .map(({ flight }) => ({
        name: flight.carrier.caption,
        price: flight.price.total.amount,
      }))
      /* Первичная сортировка по названию перевозчика */
      .sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      })
      /* Вторичная сортировка по цене */
      .sort((a, b) => {
        if (a.name === b.name) {
          return a.price - b.price;
        }
        return a.name - b.name;
      });

    /* Оставляем самые дешевые для каждого уникального перевозчика */
    const result = carriers.reduce((acc, carrier) => {
      if (!acc.some((item) => item.name === carrier.name)) {
        acc.push(carrier);
      }
      return acc;
    }, []);

    return result;
  },
};

export { GetterType, getters };
