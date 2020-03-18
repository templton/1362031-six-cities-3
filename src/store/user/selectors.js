import StoreNameSpace from "../store-name-space";

const selectUser = (state) => {
  return state[StoreNameSpace.USER];
};

const selectAuthStatus = (state) => {
  return state[StoreNameSpace.USER].authStatus;
}

export {selectUser, selectAuthStatus};
