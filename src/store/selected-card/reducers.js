import {ActionType, ActionCreator} from "./actions";
import {selectHotelById} from "../all-hotels/selectors";

const initialState = null;

const Operation = {
  setSelectedCard: (cardId) => (dispatch, getState, api) => {
    const cardInfo = selectHotelById(getState(), cardId);
    return dispatch(ActionCreator.setSelectedCard(cardInfo));
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
