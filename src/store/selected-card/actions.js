const ActionType = {
  SET_SELECTED_CARD: `SET_SELECTED_CARD`,
};

const ActionCreator = {
  setSelectedCard: (cardInfo)=>{
    return {type: ActionType.SET_SELECTED_CARD, payload: cardInfo};
  },
};

export {ActionType, ActionCreator};
