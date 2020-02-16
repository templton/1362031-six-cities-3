import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "../header/header.jsx";
import Main from "../main/main.jsx";
import CardDetail from "../card-detail/card-detail.jsx";

const App = ({offers}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="page page--gray page--main">
            <Header/>
            <Main offers={offers}/>
          </div>
        </Route>
        <Route exact path="/offer">
          <div className="page page--gray page--main">
            <Header/>
            <CardDetail/>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired
};

export default App;
