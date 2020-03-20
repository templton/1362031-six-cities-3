import React from "react";
import renderer from "react-test-renderer";
import PlacesList from "./places-list";

describe(`Render <PlacesList/>`, () => {
  it(`Empty render`, () => {
    const tree = renderer
      .create(<PlacesList places={[]} cardClass={`card_class`} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
