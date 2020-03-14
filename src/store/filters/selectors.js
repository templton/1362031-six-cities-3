import StoreNameSpace from "../store-name-space";

const selectCurrentPlaceFilterType = (state) => {
  return state[StoreNameSpace.FILTERS].currentPlaceFilterType;
};

const selectMouseOverPlaceCard = (state) => {
  return state[StoreNameSpace.FILTERS].mouseOverPlaceCard;
};

export {selectCurrentPlaceFilterType, selectMouseOverPlaceCard};
