import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

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
  cityPlaceCard.props().onClick();

  expect(cityPlaceCardHandler.mock.calls.length).toBe(1);

});
