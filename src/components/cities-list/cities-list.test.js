import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import CitiesList from "./cities-list";
import {store} from "../../mocks/test-store";

describe(`Cities list render test`, () => {

  it(`Simple render`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <CitiesList />
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();

  });
});
