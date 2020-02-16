import React from "react";
import renderer from "react-test-renderer";
import CityPlaces from "./city-places.jsx";

const offers = [
  {id: 1, name: `one`, image: `img`, price: 115},
  {id: 2, name: `two`, image: `img`, price: 120},
];

it(`<CityList /> should render`, () => {
  const tree = renderer
    .create(<CityPlaces offers={offers}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
