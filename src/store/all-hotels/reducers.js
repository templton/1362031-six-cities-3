import {ActionCreator, ActionType} from "./actions";
import {AllHotels} from "../../models/all-hotels";

const initialState = {
  hotels: []
};

const Operation = {
  loadAllHotels: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const hotels = AllHotels.toFrontendModel(response.response.data);
        dispatch(ActionCreator.loadAllHotels(hotels));
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
