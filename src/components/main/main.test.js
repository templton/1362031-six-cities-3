import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const offers = [
  {
    id: 1,
    title: `Комната №1`,
    isPremium: false,
    image: `https://upload.wikimedia.org/wikipedia/commons/3/34/Nanteos_%28geograph_3153536%29.jpg`,
    costPerNignt: 80,
    type: `room`,
    raiting: 4.7,
    cord: [52.3909553943508, 4.90309666406198]
  },
  {
    id: 2,
    title: `Комната №115`,
    isPremium: false,
    image: `https://upload.wikimedia.org/wikipedia/commons/3/34/Nanteos_%28geograph_3153536%29.jpg`,
    costPerNignt: 60,
    type: `apartment`,
    raiting: 2,
    cord: [52.3909553943508, 4.90309666406198]
  },
];

describe(`Render Main`, () => {

  const handleClickCardTitle = jest.fn();

  it(`<Main /> should render some items`, () => {
    const tree = renderer
      .create(<Main offers={offers} onClickCardTitle={handleClickCardTitle}/>, {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`<Main /> should render empty items`, () => {
    const tree = renderer
      .create(<Main offers={[]} onClickCardTitle={handleClickCardTitle}/>, {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
