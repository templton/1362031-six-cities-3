import {ActionType} from "./actions";
import {sortCityFilterType} from "./actions";

const initialState = {
  currentCityName: ``,
  currentPlaceFilterType: sortCityFilterType.POPULAR
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_CITY:
      return Object.assign({}, state, {currentCityName: action.payload});
    default:
      return state;
  }
};

export {reducer};
