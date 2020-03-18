import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Review from "../review/review";
import ReviewForm from "../review-form/review-form";
import {selectAuthStatus} from "../../store/user/selectors";
import {selectReviews} from "../../store/reviews/selectors";
import {Operation as ReviewsOperation} from "../../store/reviews/reducers";

class ReviewList extends PureComponent {

  componentDidMount() {
    const {getReviews, hotelId} = this.props;
    getReviews(hotelId);
  }

  render() {
    const {reviews, authStatus, hotelId} = this.props;
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
          // authStatus && <ReviewForm currentHotelId={hotelId}/>
        }
        <ReviewForm currentHotelId={hotelId}/>
      </section>
    );
  }
}

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
  authStatus: PropTypes.bool.isRequired,
  hotelId: PropTypes.number.isRequired,
  getReviews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: selectAuthStatus(state),
  reviews: selectReviews(state)
});

const mapDispatchToProps = ({
  getReviews: ReviewsOperation.getReviews
});

export {ReviewList};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
