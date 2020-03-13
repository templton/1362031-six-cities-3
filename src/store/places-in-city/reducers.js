import {ActionType, ActionCreator} from "./actions";
import StoreNameSpace from "../store-name-space";


const initialState = {
  places: []
};


const Operation = {
  loadPlacesInCity: (currentCityName) => (dispatch, getState, api) => {
    const state = getState();
    const places = state[StoreNameSpace.ALL_HOTELS].hotels
      .filter((item) => (item.city.name === currentCityName))
      .map((item) => ({
        id: item.id,
        cityId: item.city.name,
        title: item.title,
        isPremium: item.is_premium,
        image: item.preview_image,
        images: item.images,
        costPerNignt: item.price,
        type: item.type,
        rating: item.rating,
        cord: [item.location.latitude, item.location.longitude]
      }));
    dispatch(ActionCreator.setPlacesInCity(places));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_PLACES_IN_CITIES:
      return Object.assign({}, state, {places: action.payload});
    default:
      return state;
  }
};

export {reducer, Operation};
