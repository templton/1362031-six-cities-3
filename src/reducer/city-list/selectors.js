import StoreNameSpace from "../store-name-space";

const selectCityList = (state) => {
  return state[StoreNameSpace.CITY_LIST].items;
};

export {selectCityList};
