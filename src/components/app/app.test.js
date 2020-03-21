import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {App} from "./app";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import StoreNameSpace from "../../store/store-name-space";
import {sortCityFilterType} from "../../const";

const mockStore = configureStore([thunk]);

const store = mockStore({
  [StoreNameSpace.FILTERS]: {
    mouseOverPlaceCard: [53.346785, 83.776856],
    currentPlaceFilterType: sortCityFilterType.POPULAR
  },
  [StoreNameSpace.ALL_HOTELS]: {
    hotels: [],
    nearHotels: []
  },
  [StoreNameSpace.USER]: {
    authStatus: true
  },
  [StoreNameSpace.REVIEWS]: {
    reviews: [],
    reviewPostFetching: true
  },
  [StoreNameSpace.PLACES_IN_CITY]: {
    currentCityName: `Hamburg`
  }
});

describe(`App render`, () => {

  it(`App render`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <App loadNearbyHotels={()=>{}} offers={[]} loading={true}/>
          </Provider>, {
            createNodeMock: () => {
              return document.createElement(`div`);
            }
          }).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
