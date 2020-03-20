import React from "react";
import renderer from "react-test-renderer";
import {ReviewForm} from "./review-form";

describe(`Render <ReviewForm/>`, () => {
  it(`default render`, () => {
    const tree = renderer
      .create(<ReviewForm
        formFetching={false}
        postReview={() => ({})}
        currentHotelId={1}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
