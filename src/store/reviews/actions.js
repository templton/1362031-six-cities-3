const ActionType = {
  SET_REVIEWS_POST_FETCHING: `SET_REVIEWS_POST_FETCHING`,
  LOAD_REVIEWS: `LOAD_REVIEWS`
};

const ActionCreator = {
  setReviewsPostFetching: (fetching)=>{
    return {type: ActionType.SET_REVIEWS_POST_FETCHING, payload: fetching};
  },
  loadReviews: (reviews)=>{
    return {type: ActionType.LOAD_REVIEWS, payload: reviews};
  },
};

export {ActionCreator, ActionType};
