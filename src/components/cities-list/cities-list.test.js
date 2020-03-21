import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {CitiesList} from "./cities-list";
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

describe(`Render <CitiesList/>`, () => {

  it(`Empty render`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <CitiesList cities={[]} onLoadPlacesInCity={()=>{}}/>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();

  });
});
