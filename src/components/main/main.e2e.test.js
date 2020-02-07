import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should card be clicked`, () => {
  const appartmentCardHandler = jest.fn();
  const offers = [
    {id: 1, name: `test-1`},
    {id: 2, name: `test-2`},
  ];

  const main = mount(
      <Main offers={offers} onAppartmentCardClick={appartmentCardHandler} />
  );

  const appartmentCard = main.find(`div.cities__places-list`).first();
  appartmentCard.props().onClick();

  expect(appartmentCardHandler.mock.calls.length).toBe(1);

});
