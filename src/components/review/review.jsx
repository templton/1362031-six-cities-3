import React, {Fragment} from "react";
import Proptypes from "prop-types";
import RatingStars from "../rating-stars/rating-stars";

const Review = ({reviewDetail}) => {
  return (
    <Fragment>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={reviewDetail.avatar} width="54" height="54"
            alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{reviewDetail.userName}</span>
      </div>
      <div className="reviews__info">

        <RatingStars suffixClass="reviews" rating={reviewDetail.rating} showRaitingValue={false}/>

        <p className="reviews__text">{reviewDetail.comment}</p>
        <time className="reviews__time" dateTime={reviewDetail.timestamp}>{
          new Date(reviewDetail.timestamp).toLocaleString(`ru`, {month: `long`, year: `numeric`})
        }</time>
      </div>
    </Fragment>
  );
};

Review.propTypes = {
  reviewDetail: Proptypes.shape({
    userName: Proptypes.string.isRequired,
    avatar: Proptypes.string.isRequired,
    timestamp: Proptypes.string.isRequired,
    rating: Proptypes.number.isRequired,
    comment: Proptypes.string.isRequired,
  }).isRequired
};

export default Review;
