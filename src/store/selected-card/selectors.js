import StoreNameSpace from "../store-name-space";

const selectCurrentCardInfo = (state) => {
  return state[StoreNameSpace.SELECTED_CARD];
};

export {selectCurrentCardInfo};
