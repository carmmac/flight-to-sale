import { MutationType } from './mutations';
import { result as mocks } from '../../mocks/flights.json';
// import { State } from './state';

// mocks.flights.forEach((item, i) => {
//   if (item.flight.legs.every((leg) => leg.segments.length < 2)) {
//     console.log(i);
//   }
// });

const ActionType = {
  FETCH_FLIGHTS: 'fetchFlights',
  CHANGE_TRANSFER_FILTER: 'changeTransferFilter',
};

const actions = {
  [ActionType.FETCH_FLIGHTS]: ({ commit }) => {
    setTimeout(() => {
      commit(MutationType.SET_FLIGHTS, mocks.flights);
      commit(MutationType.SET_DATA_LOADED, true);
    }, 1000);
  },
  [ActionType.CHANGE_TRANSFER_FILTER]: ({ commit }, { filterName, value }) => {
    if (filterName === 'filter-transfer-single') {
      commit(MutationType.SET_TRANSFER_FILTER_SINGLE, value);
    }
    if (filterName === 'filter-transfer-zero') {
      commit(MutationType.SET_TRANSFER_FILTER_ZERO, value);
    }
  },
};

export { ActionType, actions };
