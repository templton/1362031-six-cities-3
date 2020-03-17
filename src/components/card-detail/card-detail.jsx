import Reactfrom "react";
import PropTypes from "prop-types";
import {PlaceCardTypes} from "../../const";
import ReviewList from "../reviews-list/reviews-list";
import RatingStars from "../rating-stars/rating-stars";
import NearPlaces from "../near-places/near-places";
import {Operation as SelectedCardOperation} from "../../store/selected-card/reducers";
import {connect} from "react-redux";

const CardDetail = (state) => {
    const {reviews, neighbourhoodPlaces, loadCardInfo, hotelId} = this.props;
    const info = loadCardInfo(hotelId);

    return (
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {info.images.map((img)=>{
                return (
                  <div className="property__image-wrapper" key={img.id}>
                    <img className="property__image" src={img.src} alt="Photo studio"/>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {info.isPremium ? <div className="property__mark"><span>Premium</span></div> : ``}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {info.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <RatingStars rating={info.rating} suffixClass="property"/>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {info.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {info.countBedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {info.countGuest}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{info.costPerNignt}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {info.features.map((item, i) => {
                    return (
                      <li className="property__inside-item" key={i}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">{info.intoTitle}</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={`/${info.owner.avatar}`} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                  {info.owner.name}
                </span>
                </div>
                <div className="property__description">
                  {info.description.split(`\n`).map((item, i) => {
                    return <p className="property__text" key={i}>{item}</p>;
                  })}
                </div>
              </div>
              <ReviewList reviews={reviews}/>
            </div>
            <NearPlaces neighbourhoodPlaces={neighbourhoodPlaces}/>
          </div>
        </section>

      </main>
    );
};

CardDetail.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    costPerNignt: PropTypes.number.isRequired,
    type: PropTypes.oneOf(Object.values(PlaceCardTypes)),
    countBedrooms: PropTypes.number.isRequired,
    countGuest: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    intoTitle: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired
    })),
    owner: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired
    })
  }),
  reviews: PropTypes.array.isRequired,
  neighbourhoodPlaces: PropTypes.array.isRequired,
  loadCardInfo: PropTypes.func.isRequired,
  hotelId: PropTypes.number.isRequired,
};

const mapDispatchToProps = ({
  loadCardInfo: SelectedCardOperation.selectCardInfo,
});

export {CardDetail};
export default connect(null, mapDispatchToProps)(CardDetail);
