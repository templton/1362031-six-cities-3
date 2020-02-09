import React from "react";
import {shallow} from "enzyme";
import Main from "./main.jsx";
import CityPlaceCard from "../city-place-card/city-place-card.jsx";

it(`Should card be clicked`, () => {
  const handlerCityPlaceCardClick = jest.fn();
  const offers = [
    {id: 1, name: `test-1`},
    {id: 2, name: `test-2`},
  ];

  const main = shallow(
      <Main offers={offers} onCityPlaceCardClick={handlerCityPlaceCardClick} />
  );

  const cityPlaceCard = main.find(CityPlaceCard).first();
  cityPlaceCard.simulate(`cityPlaceCardClick`);

  expect(handlerCityPlaceCardClick).toBeCalledTimes(1);

});
