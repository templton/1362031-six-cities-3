import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import CityPlaces from "../city-places/city-places";
import Map from "../map/map";
import CitiesList from "../cities-list/cities-list";
import {selectPlacesInCurrentCity} from "../../store/places-in-city/selectors";
import {selectCurrentCityCord} from "../../store/places-in-city/selectors";
import EmptyContent from "../empty-content/empty-content";

const Main = (props) => {
  const {offers, cityCord} = props;
  const placeCords = offers.map((item)=>item.cord);

  if (offers.length === 0) {
    return <EmptyContent/>;
  }

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesList/>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <CityPlaces offers={offers}/>
          <div className="cities__right-section">
            <Map placeCords={placeCords} cityCord={cityCord} mapClassName="cities__map"/>
          </div>
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  offers: PropTypes.array.isRequired,
  cityCord: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  cityCord: selectCurrentCityCord(state),
  offers: selectPlacesInCurrentCity(state),
});

export {Main};
export default connect(mapStateToProps)(Main);
