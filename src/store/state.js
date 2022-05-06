import { Currency, Sorting } from '@/const';

const State = {
  FLIGHTS: 'flights',
  IS_DATA_LOADED: 'isDataLoaded',
  CURRENCY: 'currency',
  CURRENT_FILTERS: 'currentFilters',
  CURRENT_SORTING: 'currentSorting',
};

const DEFAULT_CURRENCY = Currency.RUB;
const DEFAULT_SORTING = Sorting.PRICE_ASC.value;

const initialState = {
  [State.FLIGHTS]: [],
  [State.IS_DATA_LOADED]: false,
  [State.CURRENCY]: DEFAULT_CURRENCY,
  [State.CURRENT_SORTING]: DEFAULT_SORTING,
  [State.CURRENT_FILTERS]: {
    TRANSFERS: {
      ZERO: false,
      SINGLE: false,
    },
    PRICE: {
      MIN: undefined,
      MAX: undefined,
    },
    CARRIERS: [],
  },
};

const state = initialState;

export { State, state };
