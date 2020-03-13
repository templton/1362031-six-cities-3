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

const places = [
  {
    id: 1,
    cityId: 17,
    title: `Комната №1`,
    isPremium: false,
    image: `https://upload.wikimedia.org/wikipedia/commons/3/34/Nanteos_%28geograph_3153536%29.jpg`,
    costPerNignt: 80,
    type: `room`,
    rating: 4.7,
    cord: [52.3909553943508, 4.85309666406198]
  },
  {
    id: 2,
    cityId: 17,
    title: `Комната №2`,
    isPremium: false,
    image: `https://upload.wikimedia.org/wikipedia/commons/3/34/Nanteos_%28geograph_3153536%29.jpg`,
    costPerNignt: 150,
    type: `room`,
    rating: 3.9,
    cord: [52.3909553943508, 4.90309666406198]
  },
  {
    id: 3,
    cityId: 17,
    title: `Комната №3`,
    isPremium: false,
    image: `img/room.jpg`,
    costPerNignt: 240,
    type: `apartment`,
    rating: 3.5,
    cord: [52.3909553943508, 4.91309666406198]
  },
  {
    id: 4,
    cityId: 17,
    title: `Комната №4`,
    isPremium: false,
    image: `img/room.jpg`,
    costPerNignt: 370,
    type: `house`,
    v: 2.1,
    cord: [52.3909553943508, 4.92309666406198]
  },
  {
    id: 4,
    cityId: 15,
    title: `Квартира`,
    isPremium: false,
    image: `img/room.jpg`,
    costPerNignt: 370,
    type: `house`,
    rating: 2.1,
    cord: [53.339812, 83.791301]
  }
];


export {cities, places};
