import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import CityPlacesFormFilters from "./city-places-form-filters";
import {store} from "../../mocks/test-store";

describe(`CityPlacesFormFilters render`, () => {
  it(`simple render`, ()=>{
    const tree = renderer
      .create(
          <Provider store={store}>
            <CityPlacesFormFilters isFilterVisible={true} onFilterClick={()=>{}}/>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
