/* Удалить полностью !!! */

import {ActionType, sortCityFilterType} from "./actions";
import {cities, places} from "./mocks/defaultCity";

function getPlacesForCity(cityId) {
  return places.filter((item)=>(item.cityId === cityId));
}

const initialState = {
  citiesList: cities,
  city: cities[0],
  placesInCity: getPlacesForCity(cities[0].id),
  currentPlaceFilterType: sortCityFilterType.POPULAR,
  mouseOverPlaceCard: []
};


const reducer = (state = initialState, action) => {
  let placesInCity;
  switch (action.type) {
    case ActionType.SET_MOUSE_OVER_PLACE_CARD:
      return {...state, mouseOverPlaceCard: action.payload};
    case ActionType.UNSET_MOUSE_OVER_PLACE_CARD:
      return {...state, mouseOverPlaceCard: []};
    default:
      return state;
  }
};

export {reducer};
