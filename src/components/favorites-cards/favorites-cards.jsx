import React, {PureComponent, Fragment} from "react";
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

    if (sities.length === 0) {
      return (
        <Fragment>
          <main className="page__main page__main--favorites page__main--favorites-empty">
            <div className="page__favorites-container container">
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan yor future
                    trips.</p>
                </div>
              </section>
            </div>
          </main>
          <footer className="footer">
            <a className="footer__logo-link" href="main.html">
              <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
            </a>
          </footer>
        </Fragment>
      );
    }

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
