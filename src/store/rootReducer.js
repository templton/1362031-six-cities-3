import {combineReducers} from "redux";
import StoreNameSpace from "./store-name-space";
import {reducer as allHotels} from "./all-hotels/reducers";
import {reducer as placesInCity} from "./places-in-city/reducers";
import {reducer as filtersReducer} from "./filters/reducers";
import {reducer as selectedCardReducer} from "./selected-card/reducers";
import {reducer as userReducer} from "./user/reducers";
import {reducer as reviewsReducer} from "./reviews/reducers";
import {reducer as favouritesReducer} from "./favourites/reducers";

export default combineReducers({
  [StoreNameSpace.PLACES_IN_CITY]: placesInCity,
  [StoreNameSpace.FILTERS]: filtersReducer,
  [StoreNameSpace.SELECTED_CARD]: selectedCardReducer,
  [StoreNameSpace.ALL_HOTELS]: allHotels,
  [StoreNameSpace.USER]: userReducer,
  [StoreNameSpace.REVIEWS]: reviewsReducer,
  [StoreNameSpace.FAVOURITES]: favouritesReducer,
});
