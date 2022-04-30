import { CARDS_PER_PAGE_LIMIT } from '@/const';
import { State } from './state';

const GetterType = {
  GET_VISIBLE_FLIGHTS: 'getVisibleFlights',
  GET_TOTAL_FLIGHTS_NUM: 'getTotalFlightsNum',
  GET_CARRIERS_LIST: 'getCarriersList',
};

const getters = {
  [GetterType.GET_VISIBLE_FLIGHTS]: (state) => state[State.FLIGHTS].slice(0, CARDS_PER_PAGE_LIMIT),
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
      .slice()
      /* Вторичная сортировка по цене */
      .sort((a, b) => {
        if (a.name === b.name) {
          return a.price - b.price;
        }
        return a.name - b.name;
      });

    /* Оставляем самые дешевые для каждого уникального перевозчика */
    const filtered = carriers.reduce((acc, carrier) => {
      if (!acc.some((item) => item.name === carrier.name)) {
        acc.push(carrier);
      }
      return acc;
    }, []);

    return filtered;
  },
};

export { GetterType, getters };
