import React from "react";
import renderer from "react-test-renderer";
import Review from "./review";
import Proptypes from "prop-types";

const reviewMock = {
  userName: "Ivan",
  avatar: "",
  timestamp: "2020-03-20 00:00:00",
  rating: 4,
  comment: "Commnet text"
};

describe(`Render <Review/>`, () => {
  it(`Default render`, () => {
    const tree = renderer
      .create(<Review reviewDetail={reviewMock}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
