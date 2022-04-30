import { State } from './state';

const MutationType = {
  SET_FLIGHTS: 'SET_FLIGHTS',
  SET_DATA_LOADED: 'SET_DATA_LOADED',
  SET_CURRENCY: 'SET_CURRENCY',
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
};

export { MutationType, mutations };
