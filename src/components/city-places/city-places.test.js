import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import CityPlaces from "./city-places";
import {store} from "../../mocks/test-store";

const offers = [
  {
    id: 1,
    title: `Комната №1`,
    isPremium: false,
    image: `https://upload.wikimedia.org/wikipedia/commons/3/34/Nanteos_%28geograph_3153536%29.jpg`,
    costPerNignt: 80,
    type: `room`,
    rating: 4.7,
    cord: [52.38333, 4.9]
  },
  {
    id: 2,
    title: `Комната №115`,
    isPremium: false,
    image: `https://upload.wikimedia.org/wikipedia/commons/3/34/Nanteos_%28geograph_3153536%29.jpg`,
    costPerNignt: 60,
    type: `apartment`,
    rating: 2,
    cord: [52.38333, 4.9]
  },
];

describe(`CityPlaces render`, () => {
  it(`<CityList /> should render`, () => {
    const onClickCardTitle = jest.fn();
    const tree = renderer
      .create(
          <Provider store={store}>
            <CityPlaces offers={offers} onClickCardTitle={onClickCardTitle}/>
          </Provider>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
