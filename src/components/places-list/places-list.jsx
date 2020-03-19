import React, {Fragment} from "react";
import PropTypes from "prop-types";
import CityPlaceCard from "../city-place-card/city-place-card";

const PlacesList = (props) => {
  const {places, cardClass, imageWrapperClass, imgHeight, imgWidth} = props;
  return (
    <Fragment>
      {
        places.map((it) => <CityPlaceCard
          key={it.id}
          info={it}
          imgHeight={imgHeight}
          imgWidth={imgWidth}
          imageWrapperClass={imageWrapperClass}
          cardClass={cardClass}/>)
      }
    </Fragment>
  );
};

PlacesList.propTypes = {
  places: PropTypes.array.isRequired,
  cardClass: PropTypes.string.isRequired,
  imageWrapperClass: PropTypes.string,
  imgHeight: PropTypes.number,
  imgWidth: PropTypes.number,
};

export default PlacesList;
