import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "../header/header.jsx";
import Main from "../main/main.jsx";
import CardDetail from "../card-detail/card-detail.jsx";
import Login from "../login/login.jsx";
import FavoritesCards from "../favorites-cards/favorites-cards.jsx";
import {CardDeatail} from "../../mocks/carddetail";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentCityPlaceCardId: null
    };

    this.handleClickCardTitle = this.handleClickCardTitle.bind(this);
  }

  handleClickCardTitle(cityPlaceCardId) {
    this.setState({
      currentCityPlaceCardId: cityPlaceCardId
    });
  }

  render() {

    const {offers} = this.props;

    if (this.state.currentCityPlaceCardId) {
      return (
        <div className="page page--gray page--main">
          <Header/>
          <CardDetail images={CardDeatail.images} info={CardDeatail.info} owner={CardDeatail.owner}/>
        </div>
      );
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <div className="page page--gray page--main">
              <Header/>
              <Main offers={offers} onClickCardTitle={this.handleClickCardTitle}/>
            </div>
          </Route>
          <Route exact path="/offer">
            <div className="page page--gray page--main">
              <Header/>
              <CardDetail images={CardDeatail.images} info={CardDeatail.info} owner={CardDeatail.owner}/>
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
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired
};

export default App;
