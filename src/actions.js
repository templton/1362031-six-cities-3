const ActionType = {
  SET_CURRENT_CITY: `SET_CURRENT_CITY`
};

const setCurrentCity = (currentCity) => ({type: ActionType.SET_CURRENT_CITY, payload: currentCity});

export {setCurrentCity, ActionType};
