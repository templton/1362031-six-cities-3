import StoreNameSpace from "../store-name-space";

const selectReviewPostFetching = (state) => {
  return state[StoreNameSpace.REVIEWS].reviewPostFetching
};

export {selectReviewPostFetching};
