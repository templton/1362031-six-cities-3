import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {selectReviewPostFetching} from "../../store/reviews/selectors";
import {Operation} from "../../store/reviews/reducers";
// import {selectCurrentHotelId} from "../../store/selected-card/selectors";

const COMMENT_MIN_LENGTH = 5;
const COMMENT_MAX_LENGTH = 300;

class ReviewForm extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      raiting: 0,
      reviewText: ``
    };

    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextAreaChange(event) {
    this.setState({
      reviewText: event.currentTarget.value
    });
  }

  handleStartClick(event) {
    this.setState({
      raiting: event.currentTarget.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {postReview, currentHotelId} = this.props;
    const {reviewText, raiting} = this.state;
    postReview(currentHotelId, reviewText, raiting);
  }

  render() {
    const {raiting, reviewText, formFetching} = this.state;
    const submitButtonActive = reviewText.length > COMMENT_MIN_LENGTH && reviewText.length < COMMENT_MAX_LENGTH && raiting>0;
    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this.handleSubmit}>
        <fieldset disabled={formFetching} style={{border: `none`}}>
          <label className="reviews__label form__label" htmlFor="review">Your review</label>
          <div className="reviews__rating-form form__rating">
            <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
            <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>

            <input onClick={this.handleStartClick} className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
            <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>

            <input onClick={this.handleStartClick} className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
            <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>

            <input onClick={this.handleStartClick} className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
            <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>

            <input onClick={this.handleStartClick} className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
            <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </div>
          <textarea className="reviews__textarea form__textarea" id="review" name="review" onChange={this.handleTextAreaChange}
            placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
          <div className="reviews__button-wrapper">
            <p className="reviews__help">
              To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
              stay with at least <b className="reviews__text-amount">50 characters</b>.
            </p>
            <button className="reviews__submit form__submit button" type="submit" disabled={!submitButtonActive}>Submit</button>
          </div>
        </fieldset>
      </form>
    );
  }
}

ReviewForm.propTypes = {
  formFetching: PropTypes.bool.isRequired,
  postReview: PropTypes.func.isRequired,
  currentHotelId: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  formFetching: selectReviewPostFetching(state),
  // currentHotelId: selectCurrentHotelId(state)
});

const mapDispatchToProps = ({
  postReview: Operation.postReview
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
