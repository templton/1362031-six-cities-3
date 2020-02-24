import {city, placesList} from "./mocks/defaultCity";

const initialState = {
  citiesList: [
    {
      id: 15,
      name: `Барнаул`,
      cord: []
    },
    {
      id: 16,
      name: `Новосибирск`,
      cord: []
    },
    {
      id: 17,
      name: `Амстердам`,
      cord: [52.38333, 4.9]
    },
  ],
  city,
  placesList
};

const ActionType = {
  SET_CITY: `SET_CITY`,
  SET_PLACE_LIST: `SET_PLACE_LIST`
};

const ActionCreator = {
  setCity: (currentCity) => ({type: ActionType.SET_CITY, payload: currentCity}),
  setPlaceList: (currentPlacesList) => ({type: ActionType.SET_PLACE_LIST, payload: currentPlacesList})
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return Object.assign({}, state, {city: action.payload});
    case ActionType.SET_PLACE_LIST:
      return Object.assign({}, state, {placesList: action.payload});
  }
  return state;
};

export {reducer, ActionCreator};
