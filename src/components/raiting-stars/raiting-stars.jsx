import React from "react";
import PropTypes from "prop-types";

const withOneStar = 20;

const RaitingStars = (props) => {
  const {raiting, suffixClass, showRaitingValue} = props;
  return (
    <div className={`${suffixClass}__rating rating`}>
      <div className={`${suffixClass}__stars rating__stars`}>
        <span style={{width: withOneStar * Math.floor(raiting) + `%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {showRaitingValue ? <span className={`${suffixClass}__rating-value rating__value`}>{raiting}</span> : ``}
    </div>
  );
};

RaitingStars.defaultProps = {
  showRaitingValue: true
};

RaitingStars.propTypes = {
  suffixClass: PropTypes.string.isRequired,
  raiting: PropTypes.number.isRequired,
  showRaitingValue: PropTypes.bool.isRequired
};

export default RaitingStars;
