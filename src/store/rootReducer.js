import {combineReducers} from "redux";
import StoreNameSpace from "./store-name-space";
import {reducer as allHotels} from "./all-hotels/reducers";
import {reducer as placesInCity} from "./places-in-city/reducers";
import {reducer as filtersReducer} from "./filters/reducers";
import {reducer as selectedCardReducer} from "./selected-card/reducers";

export default combineReducers({
  [StoreNameSpace.ALL_HOTELS]: allHotels,
  [StoreNameSpace.PLACES_IN_CITY]: placesInCity,
  [StoreNameSpace.FILTERS]: filtersReducer,
  [StoreNameSpace.SELECTED_CARD]: selectedCardReducer,
});
