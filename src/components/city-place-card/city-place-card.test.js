import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import CityPlaceCard from "./city-place-card";
import configureStore from "redux-mock-store";
import StoreNameSpace from "../../store/store-name-space";
import {sortCityFilterType} from "../../const";
import {Router} from "react-router-dom";
import history from "../../history";

const mockStore = configureStore([]);

const store = mockStore({
  [StoreNameSpace.FILTERS]: {
    mouseOverPlaceCard: [53.346785, 83.776856],
    currentPlaceFilterType: sortCityFilterType.POPULAR
  },
  [StoreNameSpace.ALL_HOTELS]: {
    hotels: []
  },
  [StoreNameSpace.PLACES_IN_CITY]: {
    currentCityName: `Hamburg`
  }
});

const info = {
  id: 1,
  title: `Комната №1`,
  isPremium: false,
  isFavorite: false,
  image: `https://upload.wikimedia.org/wikipedia/commons/3/34/Nanteos_%28geograph_3153536%29.jpg`,
  costPerNignt: 80,
  type: `room`,
  rating: 4.7,
  cord: [52.38333, 4.9]
};


describe(`CityPlaceCard render`, () => {

  const noop = jest.fn();

  it(`Render CityPlaceCard`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <CityPlaceCard
                info={info}
                cardClass="cities__place-card"
                onCityPlaceCardMouseEnter={noop}
                onArticleMouseLeave={noop}
                onClickCardTitle={noop}/>
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
