import { Filter } from '@/const';
import { MutationType } from './mutations';
import { result as mocks } from '../../mocks/flights.json';
import { State } from './state';

const ActionType = {
  FETCH_FLIGHTS: 'fetchFlights',
  SELECT_FLIGHT: 'selectFlight',
  CHANGE_TRANSFER_FILTER: 'changeTransferFilter',
  CHANGE_CARRIERS_FILTER: 'changeCarriersFilter',
};

const actions = {
  [ActionType.FETCH_FLIGHTS]: ({ commit }) => {
    setTimeout(() => {
      commit(MutationType.SET_FLIGHTS, mocks.flights);
      commit(MutationType.SET_DATA_LOADED, true);
    }, 1000);
  },
  [ActionType.SELECT_FLIGHT]: (_context, selectedFlight) => {
    // eslint-disable-next-line no-console
    console.log(selectedFlight);
  },
  [ActionType.CHANGE_TRANSFER_FILTER]: ({ commit }, { filterName, value }) => {
    switch (filterName) {
      case Filter.TRANSFERS.SINGLE.name:
        commit(MutationType.SET_TRANSFER_FILTER_SINGLE, value);
        break;
      case Filter.TRANSFERS.ZERO.name:
        commit(MutationType.SET_TRANSFER_FILTER_ZERO, value);
        break;
      /* Возможно расширение на дополнительные параметры фильтрации */
      default:
        break;
    }
  },
  [ActionType.CHANGE_CARRIERS_FILTER]: ({ commit, state }, { carrierName, value }) => {
    if (!state[State.CURRENT_FILTERS].CARRIERS.includes(carrierName)) {
      if (value) {
        commit(MutationType.ADD_CARRIERS_FILTER, carrierName);
      }
    } else if (!value) {
      commit(MutationType.REMOVE_CARRIERS_FILTER, carrierName);
    }
  },
};

export { ActionType, actions };
