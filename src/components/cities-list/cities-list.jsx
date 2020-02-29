import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {setCurrentCity} from "../../actions";

const CitiesList = ({cities, onCityClick, currentCityId}) => {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((item)=>(
          <li key={item.id} className={`locations__item`} onClick={() => onCityClick(item)}>
            <a className={`locations__item-link tabs__item ${currentCityId === item.id ? `tabs__item--active` : ``}`} href="#">
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
  currentCityId: PropTypes.number,
  onCityClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cities: state.citiesList,
  currentCityId: state.city.id,
});

const mapDispatchToProps = {
  onCityClick: setCurrentCity
};

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
