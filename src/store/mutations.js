import { State } from './state';

const MutationType = {
  SET_FLIGHTS: 'SET_FLIGHTS',
  SET_DATA_LOADED: 'SET_DATA_LOADED',
};

const mutations = {
  [MutationType.SET_FLIGHTS]: (state, payload) => {
    state[State.FLIGHTS] = payload;
  },
  [MutationType.SET_DATA_LOADED]: (state) => {
    state[State.IS_DATA_LOADED] = true;
  },
};

export { MutationType, mutations };
