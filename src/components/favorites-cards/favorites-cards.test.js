import React from "react";
import renderer from "react-test-renderer";
import {FavoritesCards} from "./favorites-cards";

describe(`FavoritesCards render`, () => {

  it(`FavoritesCards render empty page`, () => {
    const tree = renderer
      .create(<FavoritesCards hotels={[]} loadFavourites={()=>([])}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
