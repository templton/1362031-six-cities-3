const ActionType = {
  SET_CURRENT_CITY: `SET_CURRENT_CITY`,
  SORT_PLACES_IN_CITY: `SORT_PLACES_IN_CITY`
};

const sortCityFilterType = {
  POPULAR: `Popular`,
  TOP_RATED_FIRST: `Top rated first`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
};

const setCurrentCity = (currentCity) => ({type: ActionType.SET_CURRENT_CITY, payload: currentCity});

const sortPlacesInCity = (filterType) => ({type: ActionType.SORT_PLACES_IN_CITY, payload: filterType});

export {setCurrentCity, sortPlacesInCity, ActionType, sortCityFilterType};
