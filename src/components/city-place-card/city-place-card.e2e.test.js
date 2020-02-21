import React from "react";
import {shallow} from "enzyme";
import CityPlaceCard from "./city-place-card";

const placeCardInfo = {
  id: 1,
  title: `Комната №1`,
  isPremium: false,
  image: `https://upload.wikimedia.org/wikipedia/commons/3/34/Nanteos_%28geograph_3153536%29.jpg`,
  costPerNignt: 80,
  type: `room`,
  raiting: 4.7
};

describe(`CityPlaceCard e2e`, () => {

  const onMouseEnter = jest.fn();
  const handleClickCardTitle = jest.fn();
  const cityPlaceCard = shallow(<CityPlaceCard info={placeCardInfo} onCityPlaceCardMouseEnter={onMouseEnter} onClickCardTitle={handleClickCardTitle} />);

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
