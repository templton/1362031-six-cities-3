import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

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
    const {cityCord, placeCords} = this.props;

    if (this.map) {
      this.map.remove();
      this.map = null;
    }

    if (cityCord.length === 0) {
      return;
    }

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    this.map = leaflet.map(this._ref.current, {
      center: cityCord,
      zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(cityCord, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    // Добавить маркеты с координатами мест
    if (placeCords.length) {
      placeCords.map((cord)=>{
        leaflet
          .marker(cord, {icon})
          .addTo(this.map);
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
  placeCords: PropTypes.array,
  cityCord: PropTypes.array.isRequired,
  mapClassName: PropTypes.string.isRequired,
};

export default Map;

