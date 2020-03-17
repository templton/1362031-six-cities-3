const ActionType = {
  LOAD_ALL_HOTELS: `LOAD_ALL_HOTELS`,
  SET_LOADING: `SET_LOADING`
};

const ActionCreator = {
  loadAllHotels(hotels) {
    return {type: ActionType.LOAD_ALL_HOTELS, payload: hotels};
  },
  setLoading(status) {
    return {type: ActionType.SET_LOADING, payload: status};
  }
};

export {ActionType, ActionCreator};
