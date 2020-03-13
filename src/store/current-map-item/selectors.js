import StoreNameSpace from "../store-name-space";

const selectMouseOverPlaceCard = (state) => {
  return state[StoreNameSpace.CURRENT_MAP_ITEM].mouseOverPlaceCard;
};

export {selectMouseOverPlaceCard};
