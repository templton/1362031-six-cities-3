import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers";

ReactDom.render(
    <App offers={offers} />,
    document.querySelector(`#root`)
);
