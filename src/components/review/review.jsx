import React, {Fragment} from "react";
import Proptypes from "prop-types";
import RatingStars from "../rating-stars/rating-stars";

const Review = ({reviewDetail}) => {
  return (
    <Fragment>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src="/img/avatar-max.jpg" width="54" height="54"
            alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{reviewDetail.userName}</span>
      </div>
      <div className="reviews__info">

        <RatingStars suffixClass="reviews" rating={reviewDetail.rating} showRaitingValue={false}/>

        <p className="reviews__text">
          A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is
          green and from 18th century.
        </p>
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
    timestamp: Proptypes.string.isRequired,
    rating: Proptypes.number.isRequired,
  }).isRequired
};

export default Review;
