import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const offers = [
  {id: 1, name: `one`},
  {id: 2, name: `two`},
  {id: 3, name: `three`}
];

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main offers={offers} onAppartmentCardClick={()=>{}}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
