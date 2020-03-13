import StoreNameSpace from "../store-name-space";

const selectPlacesInCurrentCity = (state) => {
  return state[StoreNameSpace.PLACES_IN_CITY].places;
};

export {selectPlacesInCurrentCity};
