import React from "react";
import renderer from "react-test-renderer";
import CityPlaceCard from "./city-place-card.jsx";

const info = {
  id: 1,
  name: `first`
};

it(`Render CityPlaceCard`, () => {
  const tree = renderer
    .create(<CityPlaceCard info={info} onCityPlaceCardClick={()=>{}}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
