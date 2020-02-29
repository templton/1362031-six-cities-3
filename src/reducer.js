import {ActionType, sortCityFilterType} from "./actions";
import {cities, places} from "./mocks/defaultCity";

function getPlacesForCity(cityId) {
  return places.filter((item)=>(item.cityId === cityId));
}

const initialState = {
  citiesList: cities,
  city: cities[0],
  placesInCity: getPlacesForCity(cities[0].id),
  currentPlaceFilterType: sortCityFilterType.POPULAR
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
      items.sort((a, b) => (b.raiting - a.raiting));
      break;
  }

  return items;
};

const reducer = (state = initialState, action) => {
  let placesInCity;
  switch (action.type) {
    case ActionType.SET_CURRENT_CITY:
      const city = action.payload;
      placesInCity = getPlacesForCity(city.id);
      return Object.assign({}, state, {city, placesInCity});
    case ActionType.SORT_PLACES_IN_CITY:
      placesInCity = sortPlacesByCost(state.placesInCity.slice(0), action.payload);
      return Object.assign({}, state, {placesInCity, currentPlaceFilterType: action.payload});
    default:
      return state;
  }
};

export {reducer};
