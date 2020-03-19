import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {selectFavourites} from "../../store/favourites/selectors";
import {Operation as FavouritesOperation} from "../../store/favourites/reducers";
import PlacesList from "../places-list/places-list";


class FavoritesCards extends PureComponent {

  componentDidMount() {
    const {loadFavourites} = this.props;
    loadFavourites();
  }

  render() {
    const {hotels} = this.props;

    const sities = Array.from(new Set(hotels.map((item)=>{
      return item.city.name;
    })));

    return (
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {sities.map((city, index)=>{
                return (
                  <li key={index} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      <PlacesList
                        imgHeight={110}
                        imgWidth={150}
                        places={hotels.filter((item)=>(item.city.name === city))}
                        cardClass={`favorites__card`}
                        imageWrapperClass="favorites__image-wrapper"/>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>
    );
  }
}

FavoritesCards.propTypes = {
  hotels: PropTypes.array,
  loadFavourites: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  hotels: selectFavourites(state)
});

const mapDispatchToProps = ({
  loadFavourites: FavouritesOperation.loadFavourites
});

export {FavoritesCards};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesCards);
