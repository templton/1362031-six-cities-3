import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import PlacesList from "../places-list/places-list";
import CityPlacesForm from "../city-places-form/city-places-form";

const CityPlaces = (props) => {
  const {offers, onClickCardTitle, city} = props;
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length ? `places to stay in ${city.name}` : `No places to stay available`}</b>
      { offers.length > 0 && <CityPlacesForm/> }
      <div className="cities__places-list places__list tabs__content">
        <PlacesList places={offers} onClickCardTitle={onClickCardTitle} cardClass="cities__place-" />
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
