import React from "react";
import renderer from "react-test-renderer";
import RatingStars from "./rating-stars";

it(`RatingStars render`, () => {
  const tree = renderer
    .create(<RatingStars suffixClass={`cards`} rating={20}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
