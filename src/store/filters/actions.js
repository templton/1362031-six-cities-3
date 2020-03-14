const ActionType = {
  SET_CURRENT_FILTER_TYPE: `SET_CURRENT_FILTER_TYPE`,
  SET_MOUSE_OVER_PLACE_CARD: `SET_MOUSE_OVER_PLACE_CARD`,
  UNSET_MOUSE_OVER_PLACE_CARD: `UNSET_MOUSE_OVER_PLACE_CARD`,
};

const ActionCreator = {
  setCurrentFilterType: (filterName) => {
    return {type: ActionType.SET_CURRENT_FILTER_TYPE, payload: filterName};
  },
  setMouseOverPlaceCard: (card) => ({type: ActionType.SET_MOUSE_OVER_PLACE_CARD, payload: card}),
  unsetMouseOverPlaceCard: () => ({type: ActionType.UNSET_MOUSE_OVER_PLACE_CARD})
};


const sortCityFilterType = {
  POPULAR: `Popular`,
  TOP_RATED_FIRST: `Top rated first`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
};

export {ActionType, ActionCreator, sortCityFilterType};
