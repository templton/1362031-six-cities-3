import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NearPlaces} from "./near-places";
import StoreNameSpace from "../../store/store-name-space";
import {Router} from "react-router-dom";
import history from "../../history";


const mockStore = configureStore([]);

const cityCord = [52.38333, 4.9];

const places = [{
  "id": 1,
  "city":
    {
      name: `Amsterdam`,
      location: {latitude: 52.37454, longitude: 4.897976, zoom: 13},
      id: `Amsterdam`
    },
  "image": `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
  "images": [{id: 0, src: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`}],
  "title": `Tile House`,
  "isPremium": false,
  "isFavorite": false,
  "rating": 4.2,
  "features": [`Air conditioning`, `Washer`, `Breakfast`, `Baby seat`, `Laptop friendly workspace`],
  "costPerNignt": 293,
  "type": `room`,
  "countBedrooms": 1,
  "countGuest": 1,
  "description": `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
  "cord": [52.37854, 4.894976], "intoTitle": `intoTitle ???`,
  "owner": {name: `Angelina`, avatar: `img/avatar-angelina.jpg`, isPro: true}
}];

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
  [StoreNameSpace.FILTERS]: {
    mouseOverPlaceCard: [53.346785, 83.776856]
  },
  citiesList: cities,
  city
});

describe(`Render near places`, () => {
  it(`Simple render`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <NearPlaces cityCord={cityCord} places={places}/>
            </Router>
          </Provider>, {
            createNodeMock: () => {
              return document.createElement(`div`);
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
