const ActionType = {
  SET_CURRENT_CITY: `SET_CURRENT_CITY`,
  SET_CURRENT_FILTER_TYPE: `SET_CURRENT_FILTER_TYPE`,
};

const ActionCreator = {
  setCurrentCityName: (currentCity) => {
    return {type: ActionType.SET_CURRENT_CITY, payload: currentCity};
  },
  setCurrentFilterType: (filterName) => {
    return {type: ActionType.SET_CURRENT_FILTER_TYPE, payload: filterName};
  },
};


const sortCityFilterType = {
  POPULAR: `Popular`,
  TOP_RATED_FIRST: `Top rated first`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
};

export {ActionType, ActionCreator, sortCityFilterType};
