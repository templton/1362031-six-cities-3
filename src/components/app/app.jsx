import React from "react";
import Header from "../header/header.jsx";
import Main from "../main/main.jsx";

const App = ({offers}) => {

  return (
    <div className="page page--gray page--main">
      <Header/>
      <Main offers={offers}/>
    </div>
  );
};

export default App;
