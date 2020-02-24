import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Map from "../map/map";
import PlacesList from "../places-list/places-list";
import withPlacesList from "../../hocs/with-places-list/with-places-list";

const PlacesListWrapped = withPlacesList(PlacesList);

const NearPlaces = (props) => {
  const {cityCord, neighbourhoodPlaces, onClickCardTitle} = props;
  return (
    <Fragment>
      <section className="property">
        <Map cityCord={cityCord} containerType="property" placeCords={neighbourhoodPlaces.map((item)=>item.cord)}/>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <PlacesListWrapped places={neighbourhoodPlaces} onClickCardTitle={onClickCardTitle} cardClass="near-places__"/>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

NearPlaces.propTypes = {
  neighbourhoodPlaces: PropTypes.array.isRequired,
  onClickCardTitle: PropTypes.func.isRequired,
  cityCord: PropTypes.array.isRequired,
};

export default NearPlaces;
