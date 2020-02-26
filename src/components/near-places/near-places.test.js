import React from "react";
import renderer from "react-test-renderer";
import NearPlaces from "./near-places";

const defaultCity = [52.38333, 4.9];

const neighbourhoodPlaces = [
  {
    id: 12,
    title: `Комната №12`,
    isPremium: false,
    image: `https://upload.wikimedia.org/wikipedia/commons/3/34/Nanteos_%28geograph_3153536%29.jpg`,
    costPerNignt: 150,
    type: `room`,
    raiting: 3.9,
    cord: [52.3909553943508, 4.90309666406198]
  },
  {
    id: 13,
    title: `Комната №13`,
    isPremium: false,
    image: `img/room.jpg`,
    costPerNignt: 240,
    type: `apartment`,
    raiting: 3.5,
    cord: [52.3909553943508, 4.91309666406198]
  },
  {
    id: 14,
    title: `Комната №14`,
    isPremium: false,
    image: `img/room.jpg`,
    costPerNignt: 370,
    type: `house`,
    raiting: 2.1,
    cord: [52.3909553943508, 4.92309666406198]
  }
];

describe(`Render near places`, () => {
  it(`Simple render`, () => {
    const tree = renderer
      .create(<NearPlaces
        neighbourhoodPlaces={neighbourhoodPlaces}
        onClickCardTitle={()=>{}}
        cityCord={defaultCity}/>, {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
