import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

const cityCord = [52.38333, 4.9];
const placeCords = [[52.3909553943508, 4.91309666406198]];

describe(`Map renderer`, () => {

  it(`simple renderer`, () => {
    const tree = renderer
      .create(<Map cityCord={cityCord} placeCords={placeCords}/>, {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
