const initialState = {
  items: [
    {
      id: 1,
      cityId: 17,
      title: `Комната №1`,
      isPremium: false,
      image: `https://upload.wikimedia.org/wikipedia/commons/3/34/Nanteos_%28geograph_3153536%29.jpg`,
      costPerNignt: 80,
      type: `room`,
      raiting: 4.7,
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
      raiting: 3.9,
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
      raiting: 3.5,
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
      raiting: 2.1,
      cord: [52.3909553943508, 4.92309666406198]
    },
    {
      id: 5,
      cityId: 15,
      title: `Квартира`,
      isPremium: false,
      image: `img/room.jpg`,
      costPerNignt: 370,
      type: `house`,
      raiting: 2.1,
      cord: [53.339812, 83.791301]
    }
  ]
};

const reducer = (state = initialState, action) => {
  return state;
}

export {reducer};
