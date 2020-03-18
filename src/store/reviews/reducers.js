import {ActionType, ActionCreator} from "./actions";

const initialState = {
  reviewPostFetching: false
};

const Operation = {
  postReview: (hotelId, comment, rating) => async (dispatch, getState, api) => {
    ActionCreator.setReviewsPostFetching(true);
    const {response} = await api.post(`/comments/${hotelId}`, {comment, rating});
    ActionCreator.setReviewsPostFetching(false);
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_REVIEWS_POST_FETCHING:
      return Object.assign({}, state, {reviewPostFetching: action.payload});
    default:
      return state;
  }
};

export {reducer, Operation};
