const ActionType = {
  SET_REVIEWS_POST_FETCHING: `SET_REVIEWS_POST_FETCHING`
};

const ActionCreator = {
  setReviewsPostFetching: (fetching)=>{
    return {type: ActionType.SET_REVIEWS_POST_FETCHING, payload: fetching};
  }
};

export {ActionCreator, ActionType};
