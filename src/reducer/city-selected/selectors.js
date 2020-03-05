import StoreNameSpace from "../store-name-space";
import {createSelector} from "reselect";

const selectCurrentCity = (state) => {
  return state[StoreNameSpace.CITY_SELECTED];
};

const selectCurrentCityCord = createSelector(
    selectCurrentCity,
    (currentCity) => (currentCity.cord)
);

const selectCurrentCityId = createSelector(
    selectCurrentCity,
    (currentCity) => (currentCity.id)
);

export {selectCurrentCityCord, selectCurrentCityId, selectCurrentCity};
