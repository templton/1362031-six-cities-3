import React from "react";
import PropTypes from "prop-types";
import {PlaceCardTypes} from "../../const";
import ReviewList from "../reviews-list/reviews-list";
import RaitingStars from "../raiting-stars/raiting-stars";
import PlacesList from "../places-list/places-list";
import Map from "../map/map";
import {CardClasses} from "../../const";

const CardDetail = (props) => {
  const {images, info, owner, reviews, neighbourhoodPlaces, onClickCardTitle, cityCord} = props;
  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.map((img)=>{
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
            <RaitingStars raiting={info.raiting} suffixClass="property"/>
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
                  <img className="property__avatar user__avatar" src={owner.avatar} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="property__user-name">
                  {owner.name}
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
        </div>
        <Map cityCord={cityCord} containerType="property" placeCords={neighbourhoodPlaces.map((item)=>item.cord)}/>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <PlacesList places={neighbourhoodPlaces} onClickCardTitle={onClickCardTitle} cardClass={CardClasses.CARD_DETAIL_NEAR}/>
          </div>
        </section>
      </div>
    </main>
  );
};

CardDetail.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired
  })),
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    raiting: PropTypes.number.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    costPerNignt: PropTypes.number.isRequired,
    type: PropTypes.oneOf(Object.values(PlaceCardTypes)),
    countBedrooms: PropTypes.number.isRequired,
    countGuest: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    intoTitle: PropTypes.string.isRequired
  }),
  owner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }),
  reviews: PropTypes.array.isRequired,
  neighbourhoodPlaces: PropTypes.array.isRequired,
  onClickCardTitle: PropTypes.func.isRequired,
  cityCord: PropTypes.array.isRequired,
};

export default CardDetail;
