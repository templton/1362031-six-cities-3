import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./store/rootReducer";
import thunk from "redux-thunk";
import {createApi} from "./api";
import {Operation as AllHotelsOperation} from "./store/all-hotels/reducers";


const handleApiError = () => {
  alert(`Ошибка АПИ. Кидаем екшен, ставим в стор ключик и по этому ключику переключаем состояние приложения`);
};

const api = createApi(handleApiError);

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
