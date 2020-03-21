const ActionType = {
  LOAD_FAVOURITES: `LOAD_FAVOURITES`
};

const ActionCreator = {
  loadFavourites: (payload) => ({type: ActionType.LOAD_FAVOURITES, payload})
};

export {ActionType, ActionCreator};
