import {ActionType} from "./action";

const initialState = {
  mouseOverPlaceCard: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_MOUSE_OVER_PLACE_CARD:
      return Object.assign({}, state, {mouseOverPlaceCard: action.payload});
    case ActionType.UNSET_MOUSE_OVER_PLACE_CARD:
      return Object.assign({}, state, {mouseOverPlaceCard: []});
    default:
      return state;
  }
};

export {reducer};
