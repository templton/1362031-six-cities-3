import {ActionType, ActionCreator} from "./actions";
import {User} from "../../models/user";

const AuthStatusType = {
  AUTH: true,
  NO_AUTH: false,
};

const HttpReponseCode = {
  OK: 200
};

const initialState = {
  authStatus: AuthStatusType.NO_AUTH,
  email: null,
  name: null,
  avatarUrl: null,
  isPro: null
};

const Operation = {
  login: (email, password) => async (dispatch, getState, api) => {
    const {response} = await api.post(`/login`, {email, password});
    const userData = User.toFrontendModel(response.data);

    if (response.status === HttpReponseCode.OK) {
      dispatch(ActionCreator.setAuth(userData));
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
      return Object.assign({}, state, {authStatus: AuthStatusType.AUTH}, {...action.payload});
    case ActionType.SET_STATUS_NO_AUTH :
      return Object.assign({}, state, {
        authStatus: AuthStatusType.NO_AUTH,
        email: null,
        name: null,
        avatarUrl: null,
        isPro: null
      });
    default:
      return state;
  }
};

export {reducer, Operation, AuthStatusType};
