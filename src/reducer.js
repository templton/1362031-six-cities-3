import {ActionType} from "./actions";
import {cities, places} from "./mocks/defaultCity";

function getPlacesForCity(cityId) {
  return places.filter((item)=>(item.cityId === cityId));
}

const initialState = {
  citiesList: cities,
  city: cities[0],
  placesInCity: getPlacesForCity(cities[0].id)
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_CITY:
      const city = action.payload;
      const placesInCity = getPlacesForCity(city.id);
      return Object.assign({}, state, {city, placesInCity});
    default:
      return state;
  }
};

export {reducer};
