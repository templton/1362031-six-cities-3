const ActionType = {
  LOAD_CITY_LIST: `LOAD_CITY_LIST`
};

const ActionCreator = {
  loadCityList(payload) {
    return ({type: ActionType.LOAD_CITY_LIST, payload});
  }
};

export {ActionCreator, ActionType};
