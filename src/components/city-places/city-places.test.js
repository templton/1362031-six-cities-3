import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import CityPlaces from "./city-places";
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
    cord: [52.38333, 4.9]
  },
  {
    id: 2,
    title: `Комната №115`,
    isPremium: false,
    image: `https://upload.wikimedia.org/wikipedia/commons/3/34/Nanteos_%28geograph_3153536%29.jpg`,
    costPerNignt: 60,
    type: `apartment`,
    raiting: 2,
    cord: [52.38333, 4.9]
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

describe(`CityPlaces render`, () => {

  const store = mockStore({
    citiesList: cities,
    placesInCity: offers,
    city,
    currentPlaceFilterType: sortCityFilterType.POPULAR
  });

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
