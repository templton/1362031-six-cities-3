import StoreNameSpace from "../store-name-space";

const selectFavourites = (state) => {
  return state[StoreNameSpace.FAVOURITES].items;
};

export {selectFavourites};
