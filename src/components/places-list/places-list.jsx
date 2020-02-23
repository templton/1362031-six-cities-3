import React, {PureComponent} from "react";
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
    const {places, onClickCardTitle, blockName} = this.props;
    return (
      <div className={`${blockName}__places-list places__list tabs__content`}>
        {
          places.map((it) => <CityPlaceCard
            key={it.id} info={it}
            blockName={blockName}
            onCityPlaceCardMouseEnter={this.handleCityPlaceCardMouseEnter}
            onClickCardTitle={onClickCardTitle}/>)
        }
      </div>
    );
  };
};

PlacesList.propTypes = {
  places: PropTypes.array.isRequired,
  onClickCardTitle: PropTypes.func.isRequired,
  blockName: PropTypes.string.isRequired,
};

export default PlacesList;
