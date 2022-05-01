import { State } from './state';

const MutationType = {
  SET_FLIGHTS: 'SET_FLIGHTS',
  SET_DATA_LOADED: 'SET_DATA_LOADED',
  SET_CURRENCY: 'SET_CURRENCY',
  SET_SORTING: 'SET_SORTING',
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
};

export { MutationType, mutations };
