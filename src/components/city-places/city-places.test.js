import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {CityPlaces} from "./city-places";
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

const offers = [
  {
    id: 1,
    title: `Комната №1`,
    isPremium: false,
    isFavorite: false,
    image: `https://upload.wikimedia.org/wikipedia/commons/3/34/Nanteos_%28geograph_3153536%29.jpg`,
    costPerNignt: 80,
    type: `room`,
    rating: 4.7,
    cord: [52.38333, 4.9]
  },
  {
    id: 2,
    title: `Комната №115`,
    isPremium: false,
    isFavorite: false,
    image: `https://upload.wikimedia.org/wikipedia/commons/3/34/Nanteos_%28geograph_3153536%29.jpg`,
    costPerNignt: 60,
    type: `apartment`,
    rating: 2,
    cord: [52.38333, 4.9]
  },
];

describe(`CityPlaces render`, () => {
  it(`<CityList /> should render`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <Provider store={store}>
              <CityPlaces offers={offers} currentCityName={`Humburg`}/>
            </Provider>
          </Router>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
