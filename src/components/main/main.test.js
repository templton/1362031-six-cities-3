import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "../../history";
import configureStore from "redux-mock-store";
import {Main} from "./main";
import StoreNameSpace from "../../store/store-name-space";
import {sortCityFilterType} from "../../const";

const mockStore = configureStore([]);

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
    cord: [52.3909553943508, 4.90309666406198]
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
    cord: [52.3909553943508, 4.90309666406198]
  },
];

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

describe(`Render Main`, () => {
  it(`Render`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <Main offers={offers} cityCord={[52.38333, 4.9]}/>
            </Router>
          </Provider>, {
            createNodeMock: () => {
              return document.createElement(`div`);
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
