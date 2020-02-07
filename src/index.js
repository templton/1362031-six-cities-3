import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";

const offers = [
  {id: 1, name: `Wood and stone place`},
  {id: 2, name: `Nice, cozy, warm big bed apartment`},
  {id: 3, name: `Canal View Prinsengracht`},
  {id: 4, name: `Wood and stone place`},
  {id: 5, name: `Nice, cozy, warm big bed apartment`},
  {id: 6, name: `Canal View Prinsengracht`},
];

ReactDom.render(
    <App offers={offers} />,
    document.querySelector(`#root`)
);
