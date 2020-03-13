// Удалить полностью

const ActionType = {
  SET_CURRENT_CITY: `SET_CURRENT_CITY`,
  SORT_PLACES_IN_CITY: `SORT_PLACES_IN_CITY`,
  SET_MOUSE_OVER_PLACE_CARD: `SET_MOUSE_OVER_PLACE_CARD`,
  UNSET_MOUSE_OVER_PLACE_CARD: `UNSET_MOUSE_OVER_PLACE_CARD`,
};

const setCurrentCity = (currentCity) => ({type: ActionType.SET_CURRENT_CITY, payload: currentCity});

const sortPlacesInCity = (filterType) => ({type: ActionType.SORT_PLACES_IN_CITY, payload: filterType});

const setMouseOverPlaceCard = (card) => ({type: ActionType.SET_MOUSE_OVER_PLACE_CARD, payload: card});
const unsetMouseOverPlaceCard = () => ({type: ActionType.UNSET_MOUSE_OVER_PLACE_CARD});

export {setCurrentCity, sortPlacesInCity, setMouseOverPlaceCard, unsetMouseOverPlaceCard, ActionType};
