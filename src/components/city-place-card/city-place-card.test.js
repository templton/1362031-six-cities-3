import React from "react";
import renderer from "react-test-renderer";
import CityPlaceCard from "./city-place-card.jsx";

const info = {
  id: 1,
  name: `first`,
  image: `str`,
  price: 555
};

it(`Render CityPlaceCard`, () => {
  const tree = renderer
    .create(<CityPlaceCard info={info} onCityPlaceCardMouseEnter={()=>{}}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
