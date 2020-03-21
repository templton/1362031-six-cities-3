import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import EmptyContent from "./empty-content";
import configureStore from "redux-mock-store";
import StoreNameSpace from "../../store/store-name-space";
import {sortCityFilterType} from "../../const";

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

describe(`Render <EmptyContent/>`, () => {
  it(`render page`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <EmptyContent/>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
