import StoreNameSpace from "../store-name-space";

const selectCurrentPlacesFilter = (state) => {
  return state[StoreNameSpace.PLACES_FILTER].name;
};

export {selectCurrentPlacesFilter};
