import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const offers = [
  {id: 1, name: `first`},
  {id: 2, name: `first`},
  {id: 3, name: `third`},
];

it(`App render`, () => {
  const tree = renderer
    .create(<App offers={offers}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
