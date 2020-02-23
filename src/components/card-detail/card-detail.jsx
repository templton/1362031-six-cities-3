import React from "react";
import PropTypes from "prop-types";
import {PlaceCardTypes} from "../../const";
import ReviewList from "../reviews-list/reviews-list";
import RaitingStars from "../raiting-stars/raiting-stars";

const CardDetail = (props) => {
  const {images, info, owner, reviews} = props;
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
        <section className="property__map map"></section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image"/>
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;80</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                  <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">In bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{width: `80%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Wood and stone place</a>
                </h2>
                <p className="place-card__type">Private room</p>
              </div>
            </article>

            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place image"/>
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;132</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                  <button className="place-card__bookmark-button button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{width: `80%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Canal View Prinsengracht</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>

            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="img/apartment-03.jpg" width="260" height="200" alt="Place image"/>
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;180</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                  <button className="place-card__bookmark-button button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{width: `80%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Nice, cozy, warm big bed apartment</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>
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
};

export default CardDetail;
