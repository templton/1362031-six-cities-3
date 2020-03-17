import {ActionType} from "./actions";
import {selectHotelById} from "../all-hotels/selectors";

const initialState = null;

const Operation = {
  selectCardInfo: (cardId) => (dispatch, getState) => {
    return selectHotelById(getState(), cardId);
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_SELECTED_CARD:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export {reducer, Operation};
