import React, {Fragment} from "react";
import PropTypes from "prop-types";
import CityPlaceCard from "../city-place-card/city-place-card";

const PlacesList = (props) => {
  const {places, cardClass} = props;
  return (
    <Fragment>
      {
        places.map((it) => <CityPlaceCard
          key={it.id} info={it}
          cardClass={cardClass}/>)
      }
    </Fragment>
  );
};

PlacesList.propTypes = {
  places: PropTypes.array.isRequired,
  cardClass: PropTypes.string.isRequired,
};

export default PlacesList;
