const ActionType = {
  SET_MOUSE_OVER_PLACE_CARD: `SET_MOUSE_OVER_PLACE_CARD`,
  UNSET_MOUSE_OVER_PLACE_CARD: `UNSET_MOUSE_OVER_PLACE_CARD`,
};

const ActionCreator = {
  setMouseOverPlaceCard: (card) => ({type: ActionType.SET_MOUSE_OVER_PLACE_CARD, payload: card}),
  unsetMouseOverPlaceCard: () => ({type: ActionType.UNSET_MOUSE_OVER_PLACE_CARD})
};

export {ActionType, ActionCreator};
