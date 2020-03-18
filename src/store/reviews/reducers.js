import {ActionType, ActionCreator} from "./actions";
import {Reviews} from "../../models/reviews";

const initialState = {
  reviewPostFetching: false,
  reviews: []
};

const Operation = {
  postReview: (hotelId, comment, rating) => async (dispatch, getState, api) => {
    ActionCreator.setReviewsPostFetching(true);
    const {response} = await api.post(`/comments/${hotelId}`, {comment, rating});
    const reviews = Reviews.toFrontendModel(response.data);
    dispatch(ActionCreator.loadReviews(reviews));
    ActionCreator.setReviewsPostFetching(false);
  },
  getReviews: (hotelId) => async (dispatch, getState, api) => {
    const {response} = await api.get(`/comments/${hotelId}`);
    const reviews = Reviews.toFrontendModel(response.data);
    dispatch(ActionCreator.loadReviews(reviews));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_REVIEWS_POST_FETCHING:
      return Object.assign({}, state, {reviewPostFetching: action.payload});
    case ActionType.LOAD_REVIEWS:
      return Object.assign({}, state, {reviews: action.payload});
    default:
      return state;
  }
};

export {reducer, Operation};
