import StoreNameSpace from "../store-name-space";

const selectUser = (state) => {
  return state[StoreNameSpace.USER];
};

export {selectUser};
