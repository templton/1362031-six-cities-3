import React from "react";
import {mount} from "enzyme";
import Main from "./main.jsx";

it(`Should card be clicked`, () => {
  const cityPlaceCardHandler = jest.fn();
  const offers = [
    {id: 1, name: `test-1`},
    {id: 2, name: `test-2`},
  ];

  const main = mount(
      <Main offers={offers} cityPlaceCardHandler={cityPlaceCardHandler} />
  );

  const cityPlaceCard = main.find(`.cities__place-card`).first();
  cityPlaceCard.simulate(`click`);

  expect(cityPlaceCardHandler).toBeCalledTimes(1);

});
