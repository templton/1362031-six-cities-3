import React from "react";
import Menu from "../menu/menu.jsx";
import Cities from "../cities/cities.jsx";

const Main = () => {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Menu/>
      <Cities/>
    </main>
  );
};

export default Main;
