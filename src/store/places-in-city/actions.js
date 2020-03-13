const ActionType = {
  SET_PLACES_IN_CITIES: `LOAD_PLACES_IN_CITIES`
};

const ActionCreator = {
  setPlacesInCity(payload) {
    return {type: ActionType.SET_PLACES_IN_CITIES, payload};
  }
};

export {ActionType, ActionCreator};
