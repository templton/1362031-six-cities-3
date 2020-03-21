import React from "react";
import renderer from "react-test-renderer";
import {ReviewList} from "./reviews-list";

describe(`Render <ReviewList/>`, () => {
  it(`Render no auth`, () => {
    const tree = renderer
      .create(<ReviewList
        reviews={[]}
        authStatus={false}
        hotelId={1}
        getReviews={()=>([])}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
