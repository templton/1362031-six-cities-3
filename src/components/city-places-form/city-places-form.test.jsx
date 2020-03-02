import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {sortCityFilterType} from "../../actions";
import {CityPlacesForm} from "./city-places-form";
import {store} from "../../mocks/test-store";


describe(`CiltyPlacesForm render`, () => {
  it(`Simple render`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <CityPlacesForm handleToggle={()=>{}} isToggleElementActive={false} currentPlaceFilterType={sortCityFilterType.POPULAR}/>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
