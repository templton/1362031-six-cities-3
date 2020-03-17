import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review";
import ReviewForm from "../review-form/review-form";

const ReviewList = ({reviews}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((item) => {
          return (
            <li key={item.id} className="reviews__item">
              <Review reviewDetail={item} />
            </li>
          );
        })}
      </ul>
      <ReviewForm/>
    </section>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewList;
