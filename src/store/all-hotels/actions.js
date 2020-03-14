const ActionType = {
  LOAD_ALL_HOTELS: `LOAD_ALL_HOTELS`
};

const ActionCreator = {
  loadAllHotels(hotels) {
    return {type: ActionType.LOAD_ALL_HOTELS, payload: hotels};
  }
};

export {ActionType, ActionCreator};
