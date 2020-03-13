import {ActionType, ActionCreator} from "./actions";
import StoreNameSpace from "../store-name-space";
import {selectPlacesInCurrentCity} from "./selectors";
import {sortCityFilterType} from "../filters/actions";


const initialState = {
  places: []
};

const sortPlacesByCost = (items, filter) => {
  switch (filter) {
    case sortCityFilterType.PRICE_LOW_TO_HIGH:
      items.sort((a, b) => (a.costPerNignt - b.costPerNignt));
      break;
    case sortCityFilterType.PRICE_HIGH_TO_LOW:
      items.sort((a, b) => (b.costPerNignt - a.costPerNignt));
      break;
    case sortCityFilterType.POPULAR:
      items.sort((a, b) => (a.id - b.id));
      break;
    case sortCityFilterType.TOP_RATED_FIRST:
      items.sort((a, b) => (b.rating - a.rating));
      break;
  }
  return items;
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
  },
  sortPlaces: (filterType) => (dispatch, getState, api) => {
    let places = selectPlacesInCurrentCity(getState());
    places = sortPlacesByCost(places.slice(0), filterType);
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
