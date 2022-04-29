import { State } from './state';

const GetterType = {
  GET_VISIBLE_FLIGHTS: 'getVisibleFlights',
};

const getters = {
  [GetterType.GET_VISIBLE_FLIGHTS]: (state) => state[State.FLIGHTS].slice(0, 2),
};

export { GetterType, getters };
