import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import CityPlacesFormFilters from "../city-places-form-filters/city-places-form-filters";
import {selectCurrentPlacesFilter} from "../../reducer/places-filter/selectors";

const CityPlacesForm = ({currentPlaceFilterType, isToggleElementActive, handleToggle}) => {

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" onClick={handleToggle}>
      &nbsp; {currentPlaceFilterType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <CityPlacesFormFilters isFilterVisible={isToggleElementActive} onFilterClick={handleToggle}/>
    </form>
  );
};

CityPlacesForm.propTypes = {
  currentPlaceFilterType: PropTypes.string.isRequired,
  isToggleElementActive: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentPlaceFilterType: selectCurrentPlacesFilter(state)
});

export {CityPlacesForm};
export default connect(mapStateToProps)(CityPlacesForm);
