import {cities, places} from "./mocks/defaultCity";

function getPlacesForCity(cityId) {
  return places.filter((item)=>(item.cityId === cityId));
}

const initialState = {
  citiesList: cities,
  city: cities[0],
  placesInCity: getPlacesForCity(cities[0].id)
};

const ActionType = {
  SET_CITY: `SET_CITY`
};

const ActionCreator = {
  setCity: (currentCity) => ({type: ActionType.SET_CITY, payload: currentCity})
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      const city = action.payload;
      const placesInCity = getPlacesForCity(city.id);
      return Object.assign({}, state, {city, placesInCity});
  }
  return state;
};

export {reducer, ActionCreator};
