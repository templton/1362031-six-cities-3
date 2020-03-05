import StoreNameSpace from "../store-name-space";

const getData = (state) => {
  return state[StoreNameSpace.DATA].data;
};

export {getData};
