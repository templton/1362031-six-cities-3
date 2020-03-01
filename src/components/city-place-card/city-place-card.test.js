import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import CityPlaceCard from "./city-place-card";
import {store} from "../../mocks/test-store";

const info = {
  id: 1,
  title: `Комната №1`,
  isPremium: false,
  image: `https://upload.wikimedia.org/wikipedia/commons/3/34/Nanteos_%28geograph_3153536%29.jpg`,
  costPerNignt: 80,
  type: `room`,
  raiting: 4.7,
  cord: [52.38333, 4.9]
};


describe(`CityPlaceCard render`, () => {

  it(`Render CityPlaceCard`, () => {
    const onClickCardTitle = jest.fn();
    const tree = renderer
      .create(
          <Provider store={store}>
            <CityPlaceCard
              info={info}
              cardClass="cities__place-card"
              onCityPlaceCardMouseEnter={()=>{}}
              onClickCardTitle={onClickCardTitle}/>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
