import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Review from "../review/review";
import ReviewForm from "../review-form/review-form";
import {selectAuthStatus} from "../../store/user/selectors";

const ReviewList = ({reviews, authStatus}) => {
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
      {
        // authStatus && <ReviewForm/>
       }
      <ReviewForm/>
    </section>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
  authStatus: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  authStatus: selectAuthStatus(state)
});

export {ReviewList};
export default connect(mapStateToProps)(ReviewList);
