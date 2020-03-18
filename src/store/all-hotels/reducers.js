import {ActionCreator, ActionType} from "./actions";
import {AllHotels} from "../../models/all-hotels";
import {Operation as PlacesInCityOperation} from "../places-in-city/reducers";
import {selectAllPlaces} from "./selectors";

const initialState = {
  hotels: [],
  loading: false,
  nearHotels: []
};

const Operation = {
  loadAllHotels: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setLoading(true));
    return api.get(`/hotels`)
      .then((response) => {
        const hotels = AllHotels.toFrontendModel(response.response.data);
        dispatch(ActionCreator.loadAllHotels(hotels));
        dispatch(PlacesInCityOperation.loadPlacesInCity(hotels[0].city.name));
        dispatch(ActionCreator.setLoading(false));
      });
  },
  loadNearbyHotels: (hotelId) => async (dispatch, getState, api) => {
    const {response} = await api.get(`/hotels/${hotelId}/nearby`);
    const nearbyHotels = AllHotels.toFrontendModel(response.data);
    dispatch(ActionCreator.setNearbyHotels(nearbyHotels));
    console.log('nearbyHotels', nearbyHotels);
  },
  setHotelFavouriteStatus: (hotelId, status) => async (dispatch, getState, api) => {
    const {response} = await api.post(`/favorite/${hotelId}/${status}`);
    const favouriteHotel = AllHotels.toFrontendModel([response.data]);
    const allHotels = selectAllPlaces(getState()).map((item) => {
      return item.id === favouriteHotel[0].id ? favouriteHotel[0] : item;
    });
    dispatch(ActionCreator.loadAllHotels(allHotels));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_ALL_HOTELS:
      return Object.assign({}, state, {hotels: action.payload});
    case ActionType.SET_LOADING:
      return Object.assign({}, state, {loading: action.payload});
    case ActionType.SET_NEARBY_HOTELS:
      return Object.assign({}, state, {nearHotels: action.payload});
    default:
      return state;
  }
};

export {reducer, Operation};
