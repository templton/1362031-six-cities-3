import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import PlacesList from "../places-list/places-list";
import withPlacesList from "../../hocs/with-places-list/with-places-list";

const PlacesListWrapped = withPlacesList(PlacesList);

const CityPlaces = (props) => {
  const {offers, onClickCardTitle, city} = props;
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length ? `places to stay in ${city.name}` : `No places to stay available`}</b>
      {
        !!offers.length &&
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex="0">
          Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex="0">Popular</li>
            <li className="places__option" tabIndex="0">Price: low to high</li>
            <li className="places__option" tabIndex="0">Price: high to low</li>
            <li className="places__option" tabIndex="0">Top rated first</li>
          </ul>
        </form>
      }
      <div className="cities__places-list places__list tabs__content">
        <PlacesListWrapped places={offers} onClickCardTitle={onClickCardTitle} cardClass="cities__place-" />
      </div>
    </section>
  );
};

CityPlaces.propTypes = {
  offers: PropTypes.array.isRequired,
  onClickCardTitle: PropTypes.func.isRequired,
  city: PropTypes.object.isRequired
};

const mapStateToProps = ({city}) => ({
  city
});

export {CityPlaces};
export default connect(mapStateToProps)(CityPlaces);
