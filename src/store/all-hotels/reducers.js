import {ActionCreator, ActionType} from "./actions";

const initialState = {
  hotels: []
};

const Operation = {
  loadAllHotels: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadAllHotels(response.response.data))
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_ALL_HOTELS:
      return Object.assign({}, state, {hotels: action.payload});
    default:
      return state;
  }
};

export {reducer, Operation};
