import React from "react";
import PropTypes from "prop-types";


const CityPlacesFormFiltersItem = (props) => {
  const {item, className, onClick} = props;
  const handleFilterClick = () => {
    onClick(item);
  };
  return (
    <li
      onClick={handleFilterClick}
      className={className}>
      {item}
    </li>
  );
};

CityPlacesFormFiltersItem.propTypes = {
  item: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CityPlacesFormFiltersItem;
