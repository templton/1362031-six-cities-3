import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import Main from "../main/main.jsx";

const handlerCityPlaceCardMouseEnter = (info) => {
  console.log('info', info);
};

const App = ({offers}) => {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <Main offers={offers} onCityPlaceCardMouseEnter={handlerCityPlaceCardMouseEnter}/>
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
