import React from "react";
import renderer from "react-test-renderer";
import CityPlaceCard from "./city-place-card";
import {CardClasses} from "../../const";

const info = {
  id: 1,
  title: `Комната №1`,
  isPremium: false,
  image: `https://upload.wikimedia.org/wikipedia/commons/3/34/Nanteos_%28geograph_3153536%29.jpg`,
  costPerNignt: 80,
  type: `room`,
  raiting: 4.7
};

describe(`CityPlaceCard render`, () => {

  it(`Render CityPlaceCard`, () => {
    const onClickCardTitle = jest.fn();
    const tree = renderer
      .create(<CityPlaceCard
        info={info}
        cardClass={CardClasses.CITIES}
        onCityPlaceCardMouseEnter={()=>{}}
        onClickCardTitle={onClickCardTitle}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
