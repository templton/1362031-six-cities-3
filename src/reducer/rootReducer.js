import {combineReducers} from "redux";
import StoreNameSpace from "./store-name-space";
import {reducer as cityList} from "./city-list/city-list";
import {reducer as citySelected} from "./city-selected/city-selected";
import {reducer as placesInCity} from "./places-in-city/places-in-city";
import {reducer as placesFilter} from "./places-filter/places-filter";

export default combineReducers({
  [StoreNameSpace.CITY_LIST]: cityList,
  [StoreNameSpace.CITY_SELECTED]: citySelected,
  [StoreNameSpace.PLACES_IN_CITY]: placesInCity,
  [StoreNameSpace.PLACES_FILTER]: placesFilter
});
