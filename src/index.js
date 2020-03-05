import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducer/rootReducer";
import thunk from "redux-thunk";
import {createApi} from "./api";

const api = createApi();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
