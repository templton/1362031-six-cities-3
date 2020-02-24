import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const CitiesList = ({cities}) => {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((item)=>(
          <li key={item.id} className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  cities: state.citiesList
});

CitiesList.propTypes = {
  cities: PropTypes.array.isRequired
};

export {CitiesList};
export default connect(mapStateToProps)(CitiesList);
