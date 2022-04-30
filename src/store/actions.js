import { MutationType } from './mutations';
import { result as mocks } from '../../mocks/flights.json';

const ActionType = {
  FETCH_FLIGHTS: 'fetchFlights',
};

const actions = {
  [ActionType.FETCH_FLIGHTS]: ({ commit }) => {
    setTimeout(() => {
      commit(MutationType.SET_FLIGHTS, mocks.flights);
      commit(MutationType.SET_DATA_LOADED, true);
    }, 1000);
  },
};

export { ActionType, actions };
