import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {sortCityFilterType, ActionCreator as FiltersActionCreator} from "../../store/filters/actions";
import CityPlacesFormFiltersItem from "../city-places-form-filters-item/city-places-form-filters-item";
import {selectCurrentPlaceFilterType} from "../../store/filters/selectors";
import {Operation as PlacesInCityOperation} from "../../store/places-in-city/reducers";

const CityPlacesFormFilters = (props) => {
  const {onFilterClick, currentPlaceFilterType, isFilterVisible, onSortPlacesInCity, onFilterChange} = props;
  const handleFilterClick = (filterType) => {
    onSortPlacesInCity(filterType);
    onFilterChange(filterType);
    onFilterClick();
  };
  return (
    isFilterVisible &&
    <ul className="places__options places__options--custom places__options--opened">
      {
        Object.values(sortCityFilterType).map((item) => {
          return (
            <CityPlacesFormFiltersItem
              key={item}
              onClick={handleFilterClick}
              className={`places__option ${currentPlaceFilterType === item ? `places__option--active` : ``}`}
              item={item}
            />
          );
        })
      }
    </ul>
  );
};

CityPlacesFormFilters.propTypes = {
  onFilterClick: PropTypes.func.isRequired,
  onSortPlacesInCity: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  currentPlaceFilterType: PropTypes.string.isRequired,
  isFilterVisible: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  currentPlaceFilterType: selectCurrentPlaceFilterType(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSortPlacesInCity: (filterType) => dispatch(PlacesInCityOperation.sortPlaces(filterType)),
  onFilterChange: (filterType) => dispatch(FiltersActionCreator.setCurrentFilterType(filterType))
});

export {CityPlacesFormFilters};
export default connect(mapStateToProps, mapDispatchToProps)(CityPlacesFormFilters);
