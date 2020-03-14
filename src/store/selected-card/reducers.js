import {ActionType, ActionCreator} from "./actions";
import {selectHotelById} from "../all-hotels/selectors";

const initialState = {
  id: null,
  images: [],
};

const Operation = {
  setSelectedCard: (cardId) => (dispatch, getState, api) => {
    const cardInfo = selectHotelById(getState(), cardId);
    console.log(cardInfo);
    return dispatch(ActionCreator.setSelectedCard(cardId));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_SELECTED_CARD:
      return Object.assign({}, state, {id: action.payload});
    default:
      return state;
  }
};

export {reducer, Operation};
