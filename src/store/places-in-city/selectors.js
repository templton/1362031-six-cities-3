import StoreNameSpace from "../store-name-space";
import {createSelector} from "reselect";
import {selectCities} from "../all-hotels/selectors";

const selectPlacesInCurrentCity = (state) => {
  return state[StoreNameSpace.PLACES_IN_CITY].places;
};

const selectCurrentCityName = (state) => {
  return state[StoreNameSpace.PLACES_IN_CITY].currentCityName;
};

const selectCurrentCityCord = createSelector(
    selectCurrentCityName,
    selectCities,
    (currentCityName, cities) => {
      const city = cities.find((item) => (item.name === currentCityName));
      return city ? [city.location.latitude, city.location.longitude] : [];
    }
);

export {selectPlacesInCurrentCity, selectCurrentCityName, selectCurrentCityCord};
