import React from "react";
import PropTypes from "prop-types";

const withOneStar = 20;

const RatingStars = (props) => {
  const {rating, suffixClass, showRatingValue} = props;
  return (
    <div className={`${suffixClass}__rating rating`}>
      <div className={`${suffixClass}__stars rating__stars`}>
        <span style={{width: withOneStar * Math.floor(rating) + `%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {showRatingValue ? <span className={`${suffixClass}__rating-value rating__value`}>{rating}</span> : ``}
    </div>
  );
};

RatingStars.defaultProps = {
  showRatingValue: true
};

RatingStars.propTypes = {
  suffixClass: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  showRatingValue: PropTypes.bool.isRequired
};

export default RatingStars;
