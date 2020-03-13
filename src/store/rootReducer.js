import {combineReducers} from "redux";
import StoreNameSpace from "./store-name-space";
import {reducer as allHotels} from "./all-hotels/reducers";
import {reducer as placesInCity} from "./places-in-city/reducers";
import {reducer as filtersReducer} from "./filters/reducers";
import {reducer as currentMapItemReducer} from "./current-map-item/reducers";

export default combineReducers({
  [StoreNameSpace.ALL_HOTELS]: allHotels,
  [StoreNameSpace.PLACES_IN_CITY]: placesInCity,
  [StoreNameSpace.FILTERS]: filtersReducer,
  [StoreNameSpace.CURRENT_MAP_ITEM]: currentMapItemReducer,
});
