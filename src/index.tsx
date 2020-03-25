import * as React from "react";
import * as ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
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
  composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(AllHotelsOperation.loadAllHotels());

ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
