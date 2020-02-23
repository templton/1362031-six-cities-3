import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";
import CityPlaceCard from "../city-place-card/city-place-card";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCityPlaceCard: null
    };

    this.handleCityPlaceCardMouseEnter = this.handleCityPlaceCardMouseEnter.bind(this);
  }

  handleCityPlaceCardMouseEnter(cityPlaceCard) {
    this.setState({
      activeCityPlaceCard: cityPlaceCard
    });
  }

  render() {
    const {places, onClickCardTitle, cardClass} = this.props;
    return (
      <Fragment>
        {
          places.map((it) => <CityPlaceCard
            key={it.id} info={it}
            cardClass={cardClass}
            onCityPlaceCardMouseEnter={this.handleCityPlaceCardMouseEnter}
            onClickCardTitle={onClickCardTitle}/>)
        }
      </Fragment>
    );
  }
}

PlacesList.propTypes = {
  places: PropTypes.array.isRequired,
  onClickCardTitle: PropTypes.func.isRequired,
  cardClass: PropTypes.string.isRequired,
};

export default PlacesList;
