import { Currency } from '@/const';

const State = {
  FLIGHTS: 'flights',
  IS_DATA_LOADED: 'isDataLoaded',
  CURRENCY: 'currency',
};

const DEFAULT_CURRENCY = Currency.RUB;

const initialState = {
  [State.FLIGHTS]: [],
  [State.IS_DATA_LOADED]: false,
  [State.CURRENCY]: DEFAULT_CURRENCY,
};

const state = initialState;

export { State, state };
