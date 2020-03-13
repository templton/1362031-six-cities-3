import {createSelector} from "reselect";
import StoreNameSpace from "../store-name-space";
import {selectCities} from "../all-hotels/selectors";

const selectCurrentCityName = (state) => {
  return state[StoreNameSpace.FILTERS].currentCityName;
};

const selectCurrentCityCord = createSelector(
    selectCurrentCityName,
    selectCities,
    (currentCityName, cities) => {
      const city = cities.find((item) => (item.name === currentCityName));
      return city ? [city.location.latitude, city.location.longitude] : [];
    }
);

const selectCurrentPlaceFilterType = (state) => {
  return state[StoreNameSpace.FILTERS].currentPlaceFilterType;
};

const selectMouseOverPlaceCard = (state) => {
  return state[StoreNameSpace.FILTERS].mouseOverPlaceCard;
};

export {selectCurrentCityName, selectCurrentPlaceFilterType, selectCurrentCityCord, selectMouseOverPlaceCard};
