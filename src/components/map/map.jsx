import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._ref = React.createRef();
  }

  componentDidMount() {
    this.renderCityAndMarkers();
  }

  renderCityAndMarkers() {
    const {cityCord, placeCords} = this.props;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    const map = leaflet.map(this._ref.current, {
      center: cityCord,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(cityCord, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    // Добавить маркеты с координатами мест
    if (placeCords.length) {
      placeCords.map((cord)=>{
        leaflet
          .marker(cord, {icon})
          .addTo(map);
      });
    }
  }

  render() {
    return (
      <section className="cities__map map">
        <div id="map" ref={this._ref} style={{width: `100%`, height: `100%`}}></div>
      </section>
    );
  }
}

Map.defaultProps = {
  placeCords: []
};

Map.propTypes = {
  // Координаты найденных мест в текущем городе
  placeCords: PropTypes.array,
  // Координаты текущего выбранного города
  cityCord: PropTypes.array.isRequired
};

export default Map;
