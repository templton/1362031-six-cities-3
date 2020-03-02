import React, {Fragment} from "react";
import PropTypes from "prop-types";
import CityPlaceCard from "../city-place-card/city-place-card";

const PlacesList = (props) => {
  const {places, onClickCardTitle, cardClass} = props;
  return (
    <Fragment>
      {
        places.map((it) => <CityPlaceCard
          key={it.id} info={it}
          cardClass={cardClass}
          onClickCardTitle={onClickCardTitle}/>)
      }
    </Fragment>
  );
};

PlacesList.propTypes = {
  places: PropTypes.array.isRequired,
  onClickCardTitle: PropTypes.func.isRequired,
  cardClass: PropTypes.string.isRequired,
};

export default PlacesList;
