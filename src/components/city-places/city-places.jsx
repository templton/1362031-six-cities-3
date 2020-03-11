import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import PlacesList from "../places-list/places-list";
import CityPlacesForm from "../city-places-form/city-places-form";
import withToggleElement from "../../hocs/with-toggle-element/with-toggle-element";

const CityPlacesFormWrapped = withToggleElement(CityPlacesForm);

const CityPlaces = (props) => {
  const {offers, onClickCardTitle, city} = props;
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${offers.length} places to stay in ${city.name}`}</b>
      { offers.length > 0 && <CityPlacesFormWrapped/> }
      <div className="cities__places-list places__list tabs__content">
        <PlacesList places={offers} onClickCardTitle={onClickCardTitle} cardClass="cities__place-card" />
      </div>
    </section>
  );
};

CityPlaces.propTypes = {
  offers: PropTypes.array.isRequired,
  onClickCardTitle: PropTypes.func.isRequired,
  city: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  city: {}
});

export {CityPlaces};
export default connect(mapStateToProps)(CityPlaces);
