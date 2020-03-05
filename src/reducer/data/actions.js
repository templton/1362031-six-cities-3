const ActionType = {
  LOAD_DATA: `LOAD_DATA`
};

const ActionCreator = {
  loadData(payload) {
    return {type: ActionType.LOAD_DATA, payload}
  }
};

export {ActionType, ActionCreator};
