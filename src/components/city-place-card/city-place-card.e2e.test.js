import React from "react";
import {shallow} from "enzyme";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import CityPlaceCard from "./city-place-card";

const mockStore = configureStore([]);

const placeCardInfo = {
  id: 1,
  title: `Комната №1`,
  isPremium: false,
  image: `https://upload.wikimedia.org/wikipedia/commons/3/34/Nanteos_%28geograph_3153536%29.jpg`,
  costPerNignt: 80,
  type: `room`,
  raiting: 4.7
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

const city = {
  id: 17,
  name: `Амстердам`,
  cord: [52.38333, 4.9]
};

const store = mockStore({
  citiesList: cities,
  placesInCity: offers,
  city
});

describe(`CityPlaceCard e2e`, () => {

  const onMouseEnter = jest.fn();
  const handleClickCardTitle = jest.fn();
  const cityPlaceCard = shallow(
      <Provider store={store}>
        <CityPlaceCard
          info={placeCardInfo}
          cardClass="cities__place-"
          onArticleMouseEnter={onMouseEnter}
          onArticleMouseLeave={()=>{}}
          onClickCardTitle={handleClickCardTitle} />
      </Provider>
  );

  it(`Should mouse over on card and card data should come into callback`, () => {
    cityPlaceCard.simulate(`mouseEnter`);
    expect(onMouseEnter).toBeCalledWith(placeCardInfo);
  });

  it(`click on title`, () => {
    const title = cityPlaceCard.find(`.place-card__name`);
    title.simulate(`click`);
    expect(handleClickCardTitle).toBeCalled();
  });
});
