import { State } from './state';

const MutationType = {
  SET_FLIGHTS: 'SET_FLIGHTS',
  SET_DATA_LOADED: 'SET_DATA_LOADED',
  SET_CURRENCY: 'SET_CURRENCY',
  SET_SORTING: 'SET_SORTING',
  SET_TRANSFER_FILTER_ZERO: 'SET_TRANSFER_FILTER_ZERO',
  SET_TRANSFER_FILTER_SINGLE: 'SET_TRANSFER_FILTER_SINGLE',
  SET_PRICE_FILTER_MIN: 'SET_PRICE_FILTER_MIN',
  SET_PRICE_FILTER_MAX: 'SET_PRICE_FILTER_MAX',
  ADD_CARRIERS_FILTER: 'ADD_CARRIERS_FILTER',
  REMOVE_CARRIERS_FILTER: 'REMOVE_CARRIERS_FILTER',
};

const mutations = {
  [MutationType.SET_FLIGHTS]: (state, payload) => {
    state[State.FLIGHTS] = payload;
  },
  [MutationType.SET_DATA_LOADED]: (state, payload) => {
    state[State.IS_DATA_LOADED] = payload;
  },
  [MutationType.SET_CURRENCY]: (state, payload) => {
    state[State.CURRENCY] = payload;
  },
  [MutationType.SET_SORTING]: (state, payload) => {
    state[State.CURRENT_SORTING] = payload;
  },
  [MutationType.SET_TRANSFER_FILTER_ZERO]: (state, payload) => {
    state[State.CURRENT_FILTERS].TRANSFERS.ZERO = payload;
  },
  [MutationType.SET_TRANSFER_FILTER_SINGLE]: (state, payload) => {
    state[State.CURRENT_FILTERS].TRANSFERS.SINGLE = payload;
  },
  [MutationType.SET_PRICE_FILTER_MIN]: (state, payload) => {
    state[State.CURRENT_FILTERS].PRICE.MIN = payload;
  },
  [MutationType.SET_PRICE_FILTER_MAX]: (state, payload) => {
    state[State.CURRENT_FILTERS].PRICE.MAX = payload;
  },
  [MutationType.ADD_CARRIERS_FILTER]: (state, payload) => {
    state[State.CURRENT_FILTERS].CARRIERS.push(payload);
  },
  [MutationType.REMOVE_CARRIERS_FILTER]: (state, payload) => {
    const index = state[State.CURRENT_FILTERS].CARRIERS.indexOf(payload);
    state[State.CURRENT_FILTERS].CARRIERS.splice(index, 1);
    // state[State.CURRENT_FILTERS].CARRIERS.delete(payload);
  },
};

export { MutationType, mutations };
