import { CARDS_PER_PAGE_LIMIT } from '@/const';
import { State } from './state';

const GetterType = {
  GET_VISIBLE_FLIGHTS: 'getVisibleFlights',
  GET_TOTAL_FLIGHTS_NUM: 'getTotalFlightsNum',
};

const getters = {
  [GetterType.GET_VISIBLE_FLIGHTS]: (state) => state[State.FLIGHTS].slice(0, CARDS_PER_PAGE_LIMIT),
  [GetterType.GET_TOTAL_FLIGHTS_NUM]: (state) => state[State.FLIGHTS].length,
};

export { GetterType, getters };
