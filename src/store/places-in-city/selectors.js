import StoreNameSpace from "../store-name-space";

const selectPlacesInCity = (state) => {
  return state[StoreNameSpace.PLACES_IN_CITY].places;
};

export {selectPlacesInCity};
