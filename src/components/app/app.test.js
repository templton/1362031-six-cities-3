import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const offers = [
  {
    id: 1,
    title: `Комната №1`,
    isPremium: false,
    image: `https://upload.wikimedia.org/wikipedia/commons/3/34/Nanteos_%28geograph_3153536%29.jpg`,
    costPerNignt: 80,
    type: `room`,
    raiting: 4.7
  },
  {
    id: 2,
    title: `Комната №115`,
    isPremium: false,
    image: `https://upload.wikimedia.org/wikipedia/commons/3/34/Nanteos_%28geograph_3153536%29.jpg`,
    costPerNignt: 60,
    type: `apartment`,
    raiting: 2
  },
];

describe(`App render`, () => {

  it(`App render`, () => {
    const onClickCardTitle = jest.fn();
    const tree = renderer
      .create(<App offers={offers} onClickCardTitle={onClickCardTitle}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
