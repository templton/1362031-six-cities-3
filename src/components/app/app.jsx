import React from "react";
import PropTypes from "prop-types";
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

App.propTypes = {
  offers: PropTypes.array.isRequired
};

export default App;
