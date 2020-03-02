import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {PlaceCardTypes} from "../../const";
import RaitingStars from "../raiting-stars/raiting-stars";
import {setMouseOverPlaceCard, unsetMouseOverPlaceCard} from "../../actions";

const CityPlaceCard = (props) => {
  const {info, onClickCardTitle, cardClass, onArticleMouseEnter, onArticleMouseLeave} = props;
  return (
    <article
      className={`${cardClass} place-card`}
      onMouseEnter={() => onArticleMouseEnter(info.cord)}
      onMouseLeave={() => onArticleMouseLeave()}>
      <div className="place-card__image-wrapper">
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
          <button className="place-card__bookmark-button place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <RaitingStars raiting={info.raiting} suffixClass="place-card" showRaitingValue={false}/>
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
    type: PropTypes.oneOf(Object.values(PlaceCardTypes)).isRequired,
    raiting: PropTypes.number.isRequired,
    cord: PropTypes.arrayOf(PropTypes.number).isRequired
  }),
  onClickCardTitle: PropTypes.func.isRequired,
  onArticleMouseEnter: PropTypes.func.isRequired,
  onArticleMouseLeave: PropTypes.func.isRequired,
  cardClass: PropTypes.string.isRequired,
};

const mapDispatchToProps = {
  onArticleMouseEnter: setMouseOverPlaceCard,
  onArticleMouseLeave: unsetMouseOverPlaceCard
};

export {CityPlaceCard};
export default connect(null, mapDispatchToProps)(CityPlaceCard);
