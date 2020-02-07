import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import Main from "../main/main.jsx";

const appartmentCardHandler = () => {};

const App = ({offers}) => {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <Main offers={offers} onAppartmentCardClick={appartmentCardHandler}/>
    </div>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      })
  )
};

export default App;
