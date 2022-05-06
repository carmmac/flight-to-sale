import { Sorting } from '@/const';
import { getFlightPriceParam, sortByTimeMin } from '@/utils';
import { State } from './state';

const GetterType = {
  GET_VISIBLE_FLIGHTS: 'getVisibleFlights',
  GET_CARRIERS_LIST: 'getCarriersList',
};

const getters = {
  [GetterType.GET_VISIBLE_FLIGHTS]: (state) => {
    const flights = state[State.FLIGHTS].slice();
    const selectedCurrency = state[State.CURRENCY];

    /*
    ** ФУНКЦИИ ФИЛЬТРАЦИИ
    */
    /* Фильтрация по цене */
    const filterByPrice = (arr) => {
      const result = arr;
      const priceMin = +state[State.CURRENT_FILTERS].PRICE.MIN;
      const priceMax = +state[State.CURRENT_FILTERS].PRICE.MAX;

      if (priceMin || priceMax) {
        return result.filter(({ flight }) => {
          const flightPriceParam = getFlightPriceParam(selectedCurrency, flight);

          if (priceMin && priceMax) {
            return (
              flightPriceParam >= priceMin
              && flightPriceParam <= priceMax
            );
          }
          if (priceMin) {
            return flightPriceParam >= priceMin;
          }
          if (priceMax) {
            return flightPriceParam <= priceMax;
          }
          return true;
        });
      }
      return result;
    };

    /* Фильтрация по количеству пересадок */
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

    /* Фильтрация по перевозчику */
    const filterByCarriers = (arr) => {
      const result = arr;
      const selectedCarriers = state[State.CURRENT_FILTERS].CARRIERS;

      if (selectedCarriers.length > 0) {
        return result.filter(({ flight }) => selectedCarriers.includes(flight.carrier.caption));
      }
      return result;
    };

    /* Применение функций фильтрации */
    const filtered = filterByCarriers(filterByTransfers(filterByPrice(flights)));

    /* Применение сортировки */
    switch (state[State.CURRENT_SORTING]) {
      case Sorting.PRICE_DESC.value:
        filtered.sort((a, b) => (
          getFlightPriceParam(selectedCurrency, b.flight)
          - getFlightPriceParam(selectedCurrency, a.flight)));
        break;
      case Sorting.PRICE_ASC.value:
        filtered.sort((a, b) => (
          getFlightPriceParam(selectedCurrency, a.flight)
          - getFlightPriceParam(selectedCurrency, b.flight)));
        break;
      case Sorting.TIME_ASC.value:
        filtered.sort(sortByTimeMin);
        break;
      default:
        break;
    }

    return filtered;
  },
  [GetterType.GET_CARRIERS_LIST]: (state) => {
    const selectedCurrency = state[State.CURRENCY];

    const carriers = state[State.FLIGHTS]
      /* Адаптация формата данных */
      .map(({ flight }) => ({
        name: flight.carrier.caption,
        price: getFlightPriceParam(selectedCurrency, flight),
        currency: selectedCurrency,
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
