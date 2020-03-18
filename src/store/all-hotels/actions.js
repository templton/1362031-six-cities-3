const ActionType = {
  LOAD_ALL_HOTELS: `LOAD_ALL_HOTELS`,
  SET_LOADING: `SET_LOADING`,
  SET_NEARBY_HOTELS: `SET_NEARBY_HOTELS`,
};

const ActionCreator = {
  loadAllHotels(hotels) {
    return {type: ActionType.LOAD_ALL_HOTELS, payload: hotels};
  },
  setLoading(status) {
    return {type: ActionType.SET_LOADING, payload: status};
  },
  setNearbyHotels(nearbyPlaces) {
    return {type: ActionType.SET_NEARBY_HOTELS, payload: nearbyPlaces};
  }
};

export {ActionType, ActionCreator};
