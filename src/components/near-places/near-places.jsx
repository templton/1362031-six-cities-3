import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import Map from "../map/map";
import PlacesList from "../places-list/places-list";
import {connect} from "react-redux";
import {selectCurrentCityCord} from "../../store/places-in-city/selectors";
import {selectNearbyPlaces} from "../../store/all-hotels/selectors";

class NearPlaces extends PureComponent {
  render() {
    const {cityCord, places} = this.props;
    const placeCords = places.map((item)=>item.cord);

    return (
      <Fragment>
        <section className="property">
          <Map cityCord={cityCord} mapClassName="property__map" placeCords={placeCords}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PlacesList places={places} cardClass="near-places__card"/>
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}

NearPlaces.propTypes = {
  cityCord: PropTypes.array.isRequired,
  places: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  cityCord: selectCurrentCityCord(state),
  places: selectNearbyPlaces(state)
});

export {NearPlaces};
export default connect(mapStateToProps)(NearPlaces);
