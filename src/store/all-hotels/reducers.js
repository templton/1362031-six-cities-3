import {ActionCreator, ActionType} from "./actions";
import {AllHotels} from "../../models/all-hotels";
import {Operation as PlacesInCityOperation} from "../places-in-city/reducers";

const initialState = {
  hotels: []
};

const Operation = {
  loadAllHotels: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const hotels = AllHotels.toFrontendModel(response.response.data);
        dispatch(ActionCreator.loadAllHotels(hotels));

        const cityName = hotels[0].city.name;
        dispatch(PlacesInCityOperation.loadPlacesInCity(cityName));
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
