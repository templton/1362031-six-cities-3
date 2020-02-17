import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const offers = [
  {id: 1, name: `one`, image: `img`, price: 115},
  {id: 2, name: `two`, image: `img`, price: 120},
];

describe(`Render Main`, () => {
  it(`<Main /> should render some items`, () => {
    const tree = renderer
      .create(<Main offers={offers}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`<Main /> should render empty items`, () => {
    const tree = renderer
      .create(<Main offers={[]}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
