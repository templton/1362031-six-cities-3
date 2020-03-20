import React from "react";
import renderer from "react-test-renderer";
import {ReviewList} from "./reviews-list";

describe(`Render <ReviewList/>`, () => {
  it(`empty render`, () => {
    const tree = renderer
      .create(<ReviewList reviews={[]} authStatus={true} hotelId={1} getReviews={()=>([])}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
