import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const offers = [
  {id: 1, name: `one`},
  {id: 2, name: `two`},
  {id: 3, name: `three`}
];

describe(`Render Main`, () => {
  it(`<Main /> should render some items`, () => {
    const tree = renderer
      .create(<Main offers={offers} onCityPlaceCardClick={()=>{}}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`<Main /> should render empty items`, () => {
    const tree = renderer
      .create(<Main offers={[]} onCityPlaceCardClick={()=>{}}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
