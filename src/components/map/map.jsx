import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {connect} from "react-redux";
import {selectMouseOverPlaceCard} from "../../store/filters/selectors";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this._ref = React.createRef();
  }

  componentDidMount() {
    this.renderCityAndMarkers();
  }

  componentDidUpdate() {
    this.renderCityAndMarkers();
  }

  renderCityAndMarkers() {
    const {cityCord, placeCords, currentCords} = this.props;

    if (!this.markers) {
      this.markers = [];
    }

    if (cityCord.length === 0) {

      if (this.map) {
        this.map.remove();
      }

      this.map = null;
      return;
    }

    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });

    const activeIcon = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;

    if (!this.map) {
      this.map = leaflet.map(this._ref.current, {
        center: cityCord,
        zoom,
        zoomControl: false,
        marker: true
      });
    }

    this.map.setView(cityCord, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this.markers.forEach((marker)=> this.map.removeLayer(marker));

    this.markers = [];

    // Добавить маркеты с координатами мест
    if (placeCords.length) {
      placeCords.map((cord)=>{
        const marker = leaflet
          .marker(cord, cord === currentCords ? {activeIcon} : {icon})
          .addTo(this.map);
        this.markers.push(marker);
      });
    }
  }

  render() {
    const {mapClassName} = this.props;
    return (
      <React.Fragment>
        <section className={`${mapClassName} map`}>
          <div id="map" ref={this._ref} style={{width: `100%`, height: `100%`}}></div>
        </section>
      </React.Fragment>
    );
  }
}

Map.defaultProps = {
  placeCords: []
};

Map.propTypes = {
  placeCords: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  cityCord: PropTypes.arrayOf(PropTypes.number).isRequired,
  currentCords: PropTypes.array,
  mapClassName: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentCords: selectMouseOverPlaceCard(state)
});

export {Map};
export default connect(mapStateToProps)(Map);

