import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import App from "./app";
import {store} from "../../mocks/test-store";

describe(`App render`, () => {

  it(`App render`, () => {
    const onClickCardTitle = jest.fn();
    const tree = renderer
      .create(
          <Provider store={store}>
            <App onClickCardTitle={onClickCardTitle}/>
          </Provider>, {
            createNodeMock: () => {
              return document.createElement(`div`);
            }
          }).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
