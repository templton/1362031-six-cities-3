import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import CityPlacesFormFilters from "../city-places-form-filters/city-places-form-filters";

class CityPlacesForm extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isFilterVisible: false
    };

    this.toggleFiltersBlock = this.toggleFiltersBlock.bind(this);
  }

  toggleFiltersBlock() {
    this.setState((prev) => ({
      isFilterVisible: !prev.isFilterVisible
    }));
  }

  render() {
    const {currentPlaceFilterType} = this.props;
    const {isFilterVisible} = this.state;
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick={this.toggleFiltersBlock}>
        &nbsp; {currentPlaceFilterType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <CityPlacesFormFilters isFilterVisible={isFilterVisible} onFilterClick={this.toggleFiltersBlock}/>
      </form>
    );
  }
}

CityPlacesForm.propTypes = {
  currentPlaceFilterType: PropTypes.string.isRequired
};

const mapStateToProps = ({currentPlaceFilterType}) => ({
  currentPlaceFilterType
});

export {CityPlacesForm};
export default connect(mapStateToProps)(CityPlacesForm);
