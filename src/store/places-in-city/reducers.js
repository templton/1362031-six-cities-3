import {ActionType, ActionCreator} from "./actions";
import StoreNameSpace from "../store-name-space";


const initialState = {
  places: []
};

const item1s = [
  {
    id: 1,
    cityId: 17,
    title: `Комната №1`,
    isPremium: false,
    image: `https://upload.wikimedia.org/wikipedia/commons/3/34/Nanteos_%28geograph_3153536%29.jpg`,
    costPerNignt: 80,
    type: `room`,
    rating: 4.7,
    cord: [52.3909553943508, 4.85309666406198]
  },
  {
    id: 2,
    cityId: 17,
    title: `Комната №2`,
    isPremium: false,
    image: `https://upload.wikimedia.org/wikipedia/commons/3/34/Nanteos_%28geograph_3153536%29.jpg`,
    costPerNignt: 150,
    type: `room`,
    rating: 3.9,
    cord: [52.3909553943508, 4.90309666406198]
  },
  {
    id: 3,
    cityId: 17,
    title: `Комната №3`,
    isPremium: false,
    image: `img/room.jpg`,
    costPerNignt: 240,
    type: `apartment`,
    rating: 3.5,
    cord: [52.3909553943508, 4.91309666406198]
  },
  {
    id: 4,
    cityId: 17,
    title: `Комната №4`,
    isPremium: false,
    image: `img/room.jpg`,
    costPerNignt: 370,
    type: `house`,
    rating: 2.1,
    cord: [52.3909553943508, 4.92309666406198]
  },
  {
    id: 5,
    cityId: 15,
    title: `Квартира`,
    isPremium: false,
    image: `img/room.jpg`,
    costPerNignt: 370,
    type: `house`,
    rating: 2.1,
    cord: [53.339812, 83.791301]
  }
];

const Operation = {
  loadPlacesInCity: (currentCityName) => (dispatch, getState, api) => {
    const state = getState();
    const items = state[StoreNameSpace.ALL_HOTELS].hotels
      .filter((item) => (item.city.name === currentCityName))
      .map((item) => ({
        id: item.id,
        cityId: item.city.name,
        title: item.title,
        isPremium: item.is_premium,
        image: item.preview_image,
        images: item.images,
        costPerNignt: item.price,
        type: item.type,
        rating: item.rating,
        cord: [item.location.latitude, item.location.longitude]
      }));
    dispatch(ActionCreator.setPlacesInCity(items));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_PLACES_IN_CITIES:
      return Object.assign({}, state, {places: action.payload});
    default:
      return state;
  }
};

export {reducer, Operation};
