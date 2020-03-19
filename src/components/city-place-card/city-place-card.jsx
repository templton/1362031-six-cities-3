import React, {useCallback} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {PlaceCardTypes} from "../../const";
import RatingStars from "../rating-stars/rating-stars";
import {ActionCreator as FiltersActionCreator} from "../../store/filters/actions";
import {Operation as AllHotelsReducer} from "../../store/all-hotels/reducers";

const CityPlaceCard = (props) => {
  const {info, cardClass, onArticleMouseEnter, onArticleMouseLeave, onFavouriteButtonClick} = props;
  const handleArticleMouseEnter = useCallback(() => onArticleMouseEnter(info.cord), [info.cord]);
  return (
    <article
      className={`${cardClass} place-card`}
      onMouseEnter={handleArticleMouseEnter}
      onMouseLeave={onArticleMouseLeave}>
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
          <button className={`place-card__bookmark-button place-card__bookmark-button${info.isFavorite ? `--active` : ``} button`} type="button" onClick={ () => {
            onFavouriteButtonClick(info.id, info.isFavorite ? 0 : 1);
          } }>
            <svg className={`place-card__bookmark-icon`} width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <RatingStars rating={info.rating} suffixClass="place-card" showRatingValue={false}/>
        </div>
        <h2 className="place-card__name">
          <Link to={`/hotel/${info.id}`}>{info.title}</Link>
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
    isFavorite: PropTypes.bool.isRequired,
    type: PropTypes.oneOf(Object.values(PlaceCardTypes)).isRequired,
    rating: PropTypes.number.isRequired,
    cord: PropTypes.arrayOf(PropTypes.number).isRequired
  }),
  onArticleMouseEnter: PropTypes.func.isRequired,
  onArticleMouseLeave: PropTypes.func.isRequired,
  onFavouriteButtonClick: PropTypes.func.isRequired,
  cardClass: PropTypes.string.isRequired,
};

const mapDispatchToProps = {
  onArticleMouseEnter: FiltersActionCreator.setMouseOverPlaceCard,
  onArticleMouseLeave: FiltersActionCreator.unsetMouseOverPlaceCard,
  onFavouriteButtonClick: AllHotelsReducer.setHotelFavouriteStatus
};

export {CityPlaceCard};
export default connect(null, mapDispatchToProps)(CityPlaceCard);
