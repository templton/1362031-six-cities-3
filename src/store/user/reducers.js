import {ActionType, ActionCreator} from "./actions";

const AuthStatusType = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const HttpReponseCode = {
  OK: 200
};

const initialState = {
  authStatus: AuthStatusType.NO_AUTH
};

const Operation = {
  login: (email, password) => async (dispatch, getState, api) => {
    const response = await api.post(`/login`, {email, password});

    if (response.response.status === HttpReponseCode.OK) {
      dispatch(ActionCreator.setAuth());
    }
  },
  checkLogin: () => async (dispatch, getState, api) => {
    const {response} = await api.get(`/login`);

    return response.status === HttpReponseCode.OK ? dispatch(ActionCreator.setAuth()) : dispatch(ActionCreator.setNoAuth());

  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_STATUS_AUTH :
      return Object.assign({}, state, {authStatus: AuthStatusType.AUTH});
    case ActionType.SET_STATUS_NO_AUTH :
      return Object.assign({}, state, {authStatus: AuthStatusType.NO_AUTH});
    default:
      return state;
  }
};

export {reducer, Operation};
