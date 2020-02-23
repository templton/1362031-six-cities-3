import React from "react";
import PropTypes from "prop-types";
import {PlaceCardTypes} from "../../const";

const CityPlaceCard = ({info, onCityPlaceCardMouseEnter, onClickCardTitle, blockName}) => {
  return (
    <article className={`${blockName}__place-card place-card`} onMouseEnter={()=>{
      onCityPlaceCardMouseEnter(info);
    }}>
      <div className={`${blockName}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={info.image} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{info.costPerNignt}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark-active"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: 20 * Math.floor(info.raiting) + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={() => {
          onClickCardTitle(info.id);
        }}>
          <a href="#">{info.title}</a>
        </h2>
        <p className="place-card__type">{info.type}</p>
      </div>
    </article>
  );
};

CityPlaceCard.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    costPerNignt: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    type: PropTypes.oneOf(Object.values(PlaceCardTypes)),
    raiting: PropTypes.number.isRequired
  }),
  onCityPlaceCardMouseEnter: PropTypes.func.isRequired,
  onClickCardTitle: PropTypes.func.isRequired,
  blockName: PropTypes.string.isRequired,
};

export default CityPlaceCard;
