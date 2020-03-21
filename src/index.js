import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./store/rootReducer";
import thunk from "redux-thunk";
import {createApi} from "./api";
import {Operation as AllHotelsOperation} from "./store/all-hotels/reducers";
import {ActionCreator as UserActionCreator} from "./store/user/actions";
import {routerPath} from "./const";
import history from "./history";


const unauthorize = () => {
  store.dispatch(UserActionCreator.setNoAuth());
  history.push(routerPath.LOGIN);
};

const api = createApi(unauthorize);

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(AllHotelsOperation.loadAllHotels());

ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
