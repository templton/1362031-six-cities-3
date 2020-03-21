import React from "react";
import renderer from "react-test-renderer";
import CityPlacesFormFiltersItem from "./city-places-form-filters-item";

describe(`Render <CityPlacesFormFiltersItem/>`, () => {
  it(`Render page`, () => {
    const tree = renderer
      .create(<CityPlacesFormFiltersItem item={``} className={``} onClick={()=>{}}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

