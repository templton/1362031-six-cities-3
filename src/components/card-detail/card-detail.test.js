import React from "react";
import renderer from "react-test-renderer";
import CardDetail from "./card-detail";
import Main from "../main/main";

const CardDeatail = {
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
  info: {
    title: `Beautiful & luxurious studio at great location approve`,
    isPremium: true,
    raiting: 4.8,
    features: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`,
      `Baby seat`, `Cabel TV`, `Большой балкон`, `Шифоньер`],
    costPerNignt: 25,
    type: `house`,
    countBedrooms: 5,
    countGuest: `15 adults`,
    intoTitle: `Meet the best host`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful. And more`,
  },
  owner: {
    name: `Иван`,
    avatar: `img/avatar-max.jpg`
  }
};

const cityCord = [52.38333, 4.9];
const neighbourhoodPlaces = [
  {
    id: 12,
    title: `Комната №12`,
    isPremium: false,
    image: `https://upload.wikimedia.org/wikipedia/commons/3/34/Nanteos_%28geograph_3153536%29.jpg`,
    costPerNignt: 150,
    type: `room`,
    raiting: 3.9,
    cord: [52.3909553943508, 4.90309666406198]
  },
  {
    id: 13,
    title: `Комната №13`,
    isPremium: false,
    image: `img/room.jpg`,
    costPerNignt: 240,
    type: `apartment`,
    raiting: 3.5,
    cord: [52.3909553943508, 4.91309666406198]
  },
  {
    id: 14,
    title: `Комната №14`,
    isPremium: false,
    image: `img/room.jpg`,
    costPerNignt: 370,
    type: `house`,
    raiting: 2.1,
    cord: [52.3909553943508, 4.92309666406198]
  }
];

describe(`CardDetail render`, () => {

  it(`CardDetail render default`, () => {
    const tree = renderer
      .create(<CardDetail
        cityCord={cityCord}
        reviews={[]}
        neighbourhoodPlaces={neighbourhoodPlaces}
        onClickCardTitle={()=>{}}
        images={CardDeatail.images}
        info={CardDeatail.info}
        owner={CardDeatail.owner}/>, {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
