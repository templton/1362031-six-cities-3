import React from "react";
import renderer from "react-test-renderer";
import {Login} from "./login";

describe(`Render <Login/>`, () => {
  it(`Render page`, () => {
    const tree = renderer
      .create(<Login onSubmit={()=>{}} authStatus={false}/>).toJSON();

    expect(tree).toMatchSnapshot();
  })
});
