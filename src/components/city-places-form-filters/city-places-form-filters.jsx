import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {sortCityFilterType, sortPlacesInCity} from "../../actions";

const CityPlacesFormFilters = (props) => {
  const {onFilterClick, currentPlaceFilterType, isFilterVisible, onSortPlacesInCity} = props;
  const handleFilterClick = (filterType) => {
    onSortPlacesInCity(filterType);
    onFilterClick();
  };
  return (
    isFilterVisible &&
    <ul className="places__options places__options--custom places__options--opened">
      {
        Object.values(sortCityFilterType).map((item) => {
          return (
            <li
              key={item}
              onClick={()=>handleFilterClick(item)}
              className={`places__option ${currentPlaceFilterType === item ? `places__option--active` : ``}`}>
              {item}
            </li>);
        })
      }
    </ul>
  );
};

CityPlacesFormFilters.propTypes = {
  onFilterClick: PropTypes.func.isRequired,
  onSortPlacesInCity: PropTypes.func.isRequired,
  currentPlaceFilterType: PropTypes.string.isRequired,
  isFilterVisible: PropTypes.bool.isRequired,
};

const mapStateToProps = ({currentPlaceFilterType}) => ({
  currentPlaceFilterType
});

const mapDispatchToProps = (dispatch) => ({
  onSortPlacesInCity: (filterType) => dispatch(sortPlacesInCity(filterType))
});

export {CityPlacesFormFilters};
export default connect(mapStateToProps, mapDispatchToProps)(CityPlacesFormFilters);
