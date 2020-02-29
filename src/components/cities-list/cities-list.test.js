import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import CitiesList from "./cities-list";

const mockStore = configureStore([]);

describe(`Cities list render test`, () => {

  it(`Simple render`, () => {
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

    const store = mockStore({
      citiesList: cities,
      city
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <CitiesList />
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();

  });
});
