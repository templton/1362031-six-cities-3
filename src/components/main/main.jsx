import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import CityPlaces from "../city-places/city-places";
import Map from "../map/map";
import CitiesList from "../cities-list/cities-list";

const Main = (props) => {
  const {onClickCardTitle, offers, cityCord} = props;

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesList/>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <CityPlaces offers={offers} onClickCardTitle={onClickCardTitle}/>
          <div className="cities__right-section">
            <Map placeCords={offers.map((item)=>item.cord)} cityCord={cityCord} mapClassName="cities__map"/>
          </div>
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  offers: PropTypes.array.isRequired,
  onClickCardTitle: PropTypes.func.isRequired,
  cityCord: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  cityCord: state.city.cord,
  offers: state.placesInCity
});

export {Main};
export default connect(mapStateToProps)(Main);
