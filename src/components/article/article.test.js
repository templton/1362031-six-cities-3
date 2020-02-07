import React from "react";
import renderer from "react-test-renderer";
import Article from "./article.jsx";

const info = {
  id: 1,
  name: `first`
};

it(`Render Article`, () => {
  const tree = renderer
    .create(<Article info={info}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
