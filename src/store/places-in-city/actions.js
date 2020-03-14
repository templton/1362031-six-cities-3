const ActionType = {
  // SET_CURRENT_CITY: `SET_CURRENT_CITY`,
  SET_PLACES_IN_CITIES: `LOAD_PLACES_IN_CITIES`
};

const ActionCreator = {
  setPlacesInCity(places) {
    return {type: ActionType.SET_PLACES_IN_CITIES, payload: places};
  }
};

export {ActionType, ActionCreator};
