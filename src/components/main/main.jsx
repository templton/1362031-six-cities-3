import React from "react";
import PropTypes from "prop-types";
import CityPlaces from "../city-places/city-places";
import Map from "../map/map";
import cityCord from "../../mocks/defaultCity";

const Main = (props) => {
  const {onClickCardTitle, offers} = props;

  const getTypeContent = () => {
    return `cities`;
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Paris</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Cologne</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Brussels</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active">
                <span>Amsterdam</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Hamburg</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <CityPlaces offers={offers} onClickCardTitle={onClickCardTitle}/>
          <div className="cities__right-section">
            <Map placeCords={offers.map((item)=>item.cord)} cityCord={cityCord} getTypeName={getTypeContent}/>
          </div>
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  offers: PropTypes.array.isRequired,
  onClickCardTitle: PropTypes.func.isRequired
};

export default Main;
