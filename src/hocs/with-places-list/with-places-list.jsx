import React, {PureComponent} from "react";

const withPlacesList = (Component) => {
  class WithPlacesList extends PureComponent {
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
      return (
        <Component
          {...this.props}
          handleCityPlaceCardMouseEnter={this.handleCityPlaceCardMouseEnter}
        />
      );
    }
  }

  return WithPlacesList;
}

export default withPlacesList;
