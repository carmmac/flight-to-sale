import { CARDS_PER_PAGE_LIMIT, Sorting } from '@/const';
import { State } from './state';

const GetterType = {
  GET_VISIBLE_FLIGHTS: 'getVisibleFlights',
  GET_TOTAL_FLIGHTS_NUM: 'getTotalFlightsNum',
  GET_CARRIERS_LIST: 'getCarriersList',
};

const getters = {
  [GetterType.GET_VISIBLE_FLIGHTS]: (state) => {
    const flights = state[State.FLIGHTS].slice();

    const filterByPrice = (arr) => {
      const result = arr;
      const priceMin = +state[State.CURRENT_FILTERS].PRICE.MIN;
      const priceMax = +state[State.CURRENT_FILTERS].PRICE.MAX;

      if (priceMin || priceMax) {
        return result.filter(({ flight }) => {
          if (priceMin && priceMax) {
            return flight.price.total.amount >= priceMin && flight.price.total.amount <= priceMax;
          }
          if (priceMin) {
            return flight.price.total.amount >= priceMin;
          }
          if (priceMax) {
            return flight.price.total.amount <= priceMax;
          }
          return true;
        });
      }
      return result;
    };

    const filterByTransfers = (arr) => {
      const result = arr;
      const isZeroTransfersFilterSelected = state[State.CURRENT_FILTERS].TRANSFERS.ZERO;
      const isSingleTransfersFilterSelected = state[State.CURRENT_FILTERS].TRANSFERS.SINGLE;

      if (isZeroTransfersFilterSelected || isSingleTransfersFilterSelected) {
        return result.filter(({ flight }) => {
          if (isZeroTransfersFilterSelected && isSingleTransfersFilterSelected) {
            return flight.legs.some(
              (leg) => leg.segments.length === 1 || leg.segments.length === 2,
            );
          }
          if (isZeroTransfersFilterSelected) {
            return flight.legs.every((leg) => leg.segments.length === 1);
          }
          if (isSingleTransfersFilterSelected) {
            return flight.legs.some((leg) => leg.segments.length === 2);
          }
          return true;
        });
      }
      return result;
    };

    const filtered = filterByTransfers(filterByPrice(flights));

    switch (state[State.CURRENT_SORTING]) {
      case Sorting.PRICE_DESC.value:
        filtered.sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount);
        break;
      case Sorting.PRICE_ASC.value:
        filtered.sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount);
        break;
      case Sorting.TIME_ASC.value:
        filtered.sort((a, b) => {
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

    return filtered.slice(0, CARDS_PER_PAGE_LIMIT);
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
