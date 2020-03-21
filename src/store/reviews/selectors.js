import StoreNameSpace from "../store-name-space";

const selectReviewPostFetching = (state) => {
  return state[StoreNameSpace.REVIEWS].reviewPostFetching;
};

const selectReviews = (state) => {
  return state[StoreNameSpace.REVIEWS].reviews;
};

export {selectReviewPostFetching, selectReviews};
