import React from "react";
import PropTypes from "prop-types";


const CityPlacesFormFiltersItem = (props) => {
  const {item, className, onClick} = props;
  return (
    <li
      onClick={()=>onClick(item)}
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
