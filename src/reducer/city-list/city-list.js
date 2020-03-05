import {ActionType} from "./actions";

const initialState = {
  items: []
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_CITY_LIST:
      return Object.assign({}, state, {items: action.payload});
    default:
      return state;
  }
};

export {reducer};
