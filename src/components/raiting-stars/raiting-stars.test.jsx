import React from "react";
import renderer from "react-test-renderer";
import RaitingStars from "./raiting-stars";

it(`RaitingStars render`, () => {
  const tree = renderer
    .create(<RaitingStars suffixClass={`cards`} raiting={20}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
