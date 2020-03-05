const ActionType = {
  LOAD_PLACES_IN_CITIES: `LOAD_PLACES_IN_CITIES`
};

const ActionCreator = {
  loadPlacesInCity(payload) {
    return {type: ActionType.LOAD_PLACES_IN_CITIES, payload};
  }
};

export {ActionType, ActionCreator};
