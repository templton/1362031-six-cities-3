import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Main from "./main";
import {sortCityFilterType} from "../../actions";

const mockStore = configureStore([]);

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

const city = {
  id: 17,
  name: `Амстердам`,
  cord: [52.38333, 4.9]
};

const cities = [
  {
    id: 17,
    name: `Амстердам`,
    cord: [52.38333, 4.9]
  },
  {
    id: 15,
    name: `Барнаул`,
    cord: [53.346785, 83.776856]
  },
  {
    id: 16,
    name: `Новосибирск`,
    cord: []
  }
];

const store = mockStore({
  placesInCity: offers,
  citiesList: cities,
  city,
  currentPlaceFilterType: sortCityFilterType.POPULAR
});

describe(`Render Main`, () => {

  const handleClickCardTitle = jest.fn();

  it(`<Main /> should render some items`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Main onClickCardTitle={handleClickCardTitle}/>
          </Provider>, {
            createNodeMock: () => {
              return document.createElement(`div`);
            }
          }).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`<Main /> should render empty items`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Main onClickCardTitle={handleClickCardTitle}/>
          </Provider>, {
            createNodeMock: () => {
              return document.createElement(`div`);
            }
          }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
