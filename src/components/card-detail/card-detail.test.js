import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import CardDetail from "./card-detail";
import configureStore from "redux-mock-store";
import StoreNameSpace from "../../store/store-name-space";
import {sortCityFilterType} from "../../const";


const mockStore = configureStore([]);

const store = mockStore({
  [StoreNameSpace.FILTERS]: {
    mouseOverPlaceCard: [53.346785, 83.776856],
    currentPlaceFilterType: sortCityFilterType.POPULAR
  },
  [StoreNameSpace.ALL_HOTELS]: {
    hotels: []
  },
  [StoreNameSpace.PLACES_IN_CITY]: {
    currentCityName: `Hamburg`
  }
});

const CardData = {
  info: {
    title: `Beautiful & luxurious studio at great location approve`,
    isPremium: true,
    isFavorite: true,
    rating: 4.8,
    features: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`,
      `Baby seat`, `Cabel TV`, `Большой балкон`, `Шифоньер`],
    costPerNignt: 25,
    type: `house`,
    countBedrooms: 5,
    countGuest: 15,
    intoTitle: `Meet the best host`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful. And more`,
    owner: {
      name: `Иван`,
      avatar: `img/avatar-max.jpg`
    },
    images: [
      {
        id: 1,
        src: `img/apartment-01.jpg`
      },
      {
        id: 2,
        src: `img/apartment-02.jpg`
      },
      {
        id: 3,
        src: `img/apartment-03.jpg`
      },
      {
        id: 4,
        src: `img/studio-01.jpg`
      },
      {
        id: 5,
        src: `img/apartment-01.jpg`
      },
      {
        id: 6,
        src: `img/room.jpg`
      }
    ],
  },
};

describe(`CardDetail render`, () => {

  it(`CardDetail render default`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <CardDetail
              hotelId={1}
              loadCardInfo={{}}
              onFavouriteButtonClick={()=>{}}
            />
          </Provider>, {
            createNodeMock: () => {
              return document.createElement(`div`);
            }
          }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

