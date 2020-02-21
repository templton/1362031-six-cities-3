import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CityPlaceCard from "../city-place-card/city-place-card";

class CityPlaces extends PureComponent {
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
    const {offers, onClickCardTitle} = this.props;

    return (
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">312 places to stay in Amsterdam</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex="0">
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex="0">Popular</li>
            <li className="places__option" tabIndex="0">Price: low to high</li>
            <li className="places__option" tabIndex="0">Price: high to low</li>
            <li className="places__option" tabIndex="0">Top rated first</li>
          </ul>
        </form>
        <div className="cities__places-list places__list tabs__content">
          {offers.map((it) => <CityPlaceCard key={it.id} info={it} onCityPlaceCardMouseEnter={this.handleCityPlaceCardMouseEnter} onClickCardTitle={onClickCardTitle}/>)}
        </div>
      </section>
    );
  }
}

CityPlaces.propTypes = {
  offers: PropTypes.array.isRequired,
  onClickCardTitle: PropTypes.func.isRequired
};

export default CityPlaces;
