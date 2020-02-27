import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {connect} from "react-redux";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this._ref = React.createRef();
  }

  componentDidMount() {
    this.renderCityAndMarkers();
  }

  componentWillUpdate() {
    // console.log('map render', this.props.cityCord);
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
    const {mapClassName, cityCord} = this.props;
    return (
      <React.Fragment>

        {
          /* Вот тут видно что props.cityCord меняется. Но почему-то карта нифига не обновляется */
        }

        <h1>data: {cityCord.map((item)=>item)}</h1>
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

