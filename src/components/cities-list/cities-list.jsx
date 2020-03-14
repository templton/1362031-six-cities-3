import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {selectCities} from "../../store/all-hotels/selectors";
import {selectCurrentCityName} from "../../store/filters/selectors";
import {ActionCreator as FiltersActionCreator} from "../../store/filters/actions";
import {Operation as PlacesInCityOperation} from "../../store/places-in-city/reducers";

const CitiesList = ({cities, onCityClick, currentCityName, onLoadPlacesInCity}) => {

  const handleCityClick = (cityName) => {
    onCityClick(cityName);
    onLoadPlacesInCity(cityName);
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((item)=>(
          <li key={item.id} className={`locations__item`} onClick={() => (handleCityClick(item.name)) }>
            <a className={`locations__item-link tabs__item ${currentCityName === item.name ? `tabs__item--active` : ``}`} href="#">
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.array.isRequired,
  currentCityName: PropTypes.string,
  onCityClick: PropTypes.func.isRequired,
  onLoadPlacesInCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cities: selectCities(state),
  currentCityName: selectCurrentCityName(state),
});

const mapDispatchToProps = {
  onCityClick: FiltersActionCreator.setCurrentCityName,
  onLoadPlacesInCity: PlacesInCityOperation.loadPlacesInCity
};

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
