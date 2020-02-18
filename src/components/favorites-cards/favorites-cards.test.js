import React from "react";
import renderer from "react-test-renderer";
import FavoritesCards from "./favorites-cards.jsx";

describe(`FavoritesCards render`, () => {

  it(`FavoritesCards render default`, () => {
    const tree = renderer
      .create(<FavoritesCards/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
