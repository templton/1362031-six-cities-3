import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  IDENTITY: `Саламатов`
};

ReactDom.render(
    <App surname={Settings.IDENTITY}/>,
    document.querySelector(`#root`)
);
