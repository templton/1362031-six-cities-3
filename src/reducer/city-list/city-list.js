const initialState = {
  items: [
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
  ]
};

const reducer = (state = initialState, action) => {
  return state;
};

export {reducer};

