import StoreNameSpace from "../store-name-space";

const selectCurrentCardInfo = (state) => {
  return state[StoreNameSpace.SELECTED_CARD];
};

const selectCurrentCardId = (state) => {
  return selectCurrentCardInfo(state).id;
};

export {selectCurrentCardId};
