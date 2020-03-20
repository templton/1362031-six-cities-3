import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NearPlaces} from "./near-places";
import StoreNameSpace from "../../store/store-name-space";
import {selectMouseOverPlaceCard} from "../../store/filters/selectors";
import {Router} from "react-router-dom";
import history from "../../history";


const mockStore = configureStore([]);

const cityCord = [52.38333, 4.9];

const neighbourhoodPlaces = [
  {
    id: 12,
    title: `Комната №12`,
    isPremium: false,
    image: `https://upload.wikimedia.org/wikipedia/commons/3/34/Nanteos_%28geograph_3153536%29.jpg`,
    costPerNignt: 150,
    type: `room`,
    rating: 3.9,
    cord: [52.3909553943508, 4.90309666406198]
  },
  {
    id: 13,
    title: `Комната №13`,
    isPremium: false,
    image: `img/room.jpg`,
    costPerNignt: 240,
    type: `apartment`,
    rating: 3.5,
    cord: [52.3909553943508, 4.91309666406198]
  },
  {
    id: 14,
    title: `Комната №14`,
    isPremium: false,
    image: `img/room.jpg`,
    costPerNignt: 370,
    type: `house`,
    rating: 2.1,
    cord: [52.3909553943508, 4.92309666406198]
  }
];

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
    mouseOverPlaceCard: {}
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
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
