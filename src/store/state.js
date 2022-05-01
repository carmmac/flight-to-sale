import { Currency, Sorting } from '@/const';

const State = {
  FLIGHTS: 'flights',
  IS_DATA_LOADED: 'isDataLoaded',
  CURRENCY: 'currency',
  CURRENT_FILTER: 'currentFilter',
  CURRENT_SORTING: 'currentSorting',
};

const DEFAULT_CURRENCY = Currency.RUB;
const DEFAULT_SORTING = Sorting.PRICE_ASC.value;

const initialState = {
  [State.FLIGHTS]: [],
  [State.IS_DATA_LOADED]: false,
  [State.CURRENCY]: DEFAULT_CURRENCY,
  [State.CURRENT_SORTING]: DEFAULT_SORTING,
};

const state = initialState;

export { State, state };
