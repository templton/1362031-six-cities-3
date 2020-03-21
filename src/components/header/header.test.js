import React from "react";
import {Router} from "react-router-dom";
import history from "../../history";
import renderer from "react-test-renderer";
import {Header} from "./header";

const user = {
  id: 10,
  email: `sad@sad.com`,
  avatarUrl: ``
};

it(`Render Header`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Header user={user}/>
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
