import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const offers = [
  {id: 1, name: `first`, image: `sad`, price: 115},
  {id: 2, name: `first`, image: `sad`, price: 896}
];

it(`App render`, () => {
  const tree = renderer
    .create(<App offers={offers}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
