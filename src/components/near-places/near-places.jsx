import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Map from "../map/map";
import PlacesList from "../places-list/places-list";
import {CardClasses} from "../../const";

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
            <PlacesList places={neighbourhoodPlaces} onClickCardTitle={onClickCardTitle} cardClass={CardClasses.CARD_DETAIL_NEAR}/>
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
