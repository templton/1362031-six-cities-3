import React from "react";
import renderer from "react-test-renderer";
import {CityPlacesFormFilters} from "./city-places-form-filters";
import {sortCityFilterType} from "../../const";

describe(`CityPlacesFormFilters render`, () => {
  it(`simple render`, ()=>{
    const tree = renderer
      .create(<CityPlacesFormFilters
        onFilterClick={()=>{}}
        onSortPlacesInCity={()=>{}}
        onFilterChange={()=>{}}
        currentPlaceFilterType={sortCityFilterType.POPULAR}
        isFilterVisible={true}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
