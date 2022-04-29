const State = {
  FLIGHTS: 'flights',
  IS_DATA_LOADED: 'isDataLoaded',
};

const initialState = {
  [State.FLIGHTS]: [],
  [State.IS_DATA_LOADED]: false,
};

const state = initialState;

export { State, state };
