import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "../header/header.jsx";
import Main from "../main/main.jsx";
import CardDetail from "../card-detail/card-detail.jsx";
import Login from "../login/login.jsx";
import FavoritesCards from "../favorites-cards/favorites-cards.jsx";
import carddetail from "../../mocks/carddetail";

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
            <CardDetail images={carddetail.images} info={carddetail.info} owner={carddetail.owner}/>
          </div>
        </Route>
        <Route exact path="/login">
          <div className="page page--gray page--login">
            <Header/>
            <Login/>
          </div>
        </Route>
        <Route exact path="/favorites">
          <div className="page">
            <Header/>
            <FavoritesCards/>
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
