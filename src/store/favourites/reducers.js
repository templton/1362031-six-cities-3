import {ActionType, ActionCreator} from "./actions";
import {AllHotels} from "../../models/all-hotels";

const initialState = {
  items: []
};

const Operation = {
  loadFavourites: () => async (dispatch, getState, api) => {
    const {response} = await api.get(`/favorite`);
    dispatch(ActionCreator.loadFavourites(AllHotels.toFrontendModel(response.data)));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVOURITES:
      return Object.assign({}, state, {items: action.payload});
    default:
      return state;
  }
};

export {reducer, Operation};
