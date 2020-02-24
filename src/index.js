import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./reducer";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

ReactDom.render(
    <Provider store={store}>
      <App offers={offers} />
    </Provider>,
    document.querySelector(`#root`)
);
