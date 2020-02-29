import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Map from "../map/map";
import PlacesList from "../places-list/places-list";
import withPlacesList from "../../hocs/with-places-list/with-places-list";
import {connect} from "react-redux";

const PlacesListWrapped = withPlacesList(PlacesList);

const NearPlaces = (props) => {
  const {cityCord, neighbourhoodPlaces, onClickCardTitle} = props;
  const placeCords = neighbourhoodPlaces.map((item)=>item.cord);

  return (
    <Fragment>
      <section className="property">
        <Map cityCord={cityCord} mapClassName="property__map" placeCords={placeCords}/>
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

const mapStateToProps = (state) => ({
  cityCord: state.city.cord
});

export {NearPlaces};
export default connect(mapStateToProps)(NearPlaces);