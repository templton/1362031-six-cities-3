import React from "react";
import renderer from "react-test-renderer";
import {CityPlacesForm} from "./city-places-form";
import {Provider} from "react-redux";
import {sortCityFilterType} from "../../const";
import configureStore from "redux-mock-store";
import StoreNameSpace from "../../store/store-name-space";

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

describe(`CiltyPlacesForm render`, () => {
  it(`Simple render`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <CityPlacesForm
              handleToggle={()=>{}}
              isToggleElementActive={false}
              currentPlaceFilterType={sortCityFilterType.POPULAR}
            />
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
