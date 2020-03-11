import {combineReducers} from "redux";
import StoreNameSpace from "./store-name-space";
import {reducer as allHotels} from "./all-hotels/reducers";
import {reducer as cities} from "./cities/reducers";
import {reducer as placesInCity} from "./places-in-city/reducers";

export default combineReducers({
  [StoreNameSpace.ALL_HOTELS]: allHotels,
  [StoreNameSpace.CITIES]: cities,
  [StoreNameSpace.PLACES_IN_CITY]: placesInCity,
});
