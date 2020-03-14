const ActionType = {
  SET_STATUS_AUTH: `SET_STATUS_AUTH`,
  SET_STATUS_NO_AUTH: `SET_STATUS_NO_AUTH`
};

const ActionCreator = {
  setAuth: (userData) => {
    return {type: ActionType.SET_STATUS_AUTH, payload: userData};
  },
  setNoAuth: () => {
    return {type: ActionType.SET_STATUS_NO_AUTH};
  },
};

export {ActionType, ActionCreator};
