import React from "react";
import {shallow} from "enzyme";
import CityPlaceCard from "./city-place-card.jsx";

const placeCardInfo = {
  id: 1,
  name: `nam1`,
  image: `str`,
  price: 120
};

it(`Should mouse over on card and card data should come into callback`, () => {
  const onMouseEnter = jest.fn();
  const cityPlaceCard = shallow(<CityPlaceCard info={placeCardInfo} onCityPlaceCardMouseEnter={onMouseEnter} />);
  cityPlaceCard.simulate(`mouseEnter`);

  expect(onMouseEnter).toBeCalledWith(placeCardInfo);
});
