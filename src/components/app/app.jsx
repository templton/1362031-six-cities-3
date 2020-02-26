import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "../header/header";
import Main from "../main/main";
import CardDetail from "../card-detail/card-detail";
import Login from "../login/login";
import FavoritesCards from "../favorites-cards/favorites-cards";
import {CardDeatail} from "../../mocks/carddetail";
import PageContainer from "../page-container/page-container";
import {reviews} from "../../mocks/review-list";
import {neighbourhoodPlaces} from "../../mocks/offers";
import cityCord from "../../mocks/defaultCity";

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
          <CardDetail
            cityCord={cityCord}
            images={CardDeatail.images}
            info={CardDeatail.info}
            owner={CardDeatail.owner}
            reviews={reviews}
            neighbourhoodPlaces={neighbourhoodPlaces}
            onClickCardTitle={this.handleClickCardTitle}/>
        </div>
      );
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <PageContainer pageClass="page--gray page--main">
              <Main offers={offers} onClickCardTitle={this.handleClickCardTitle}/>
            </PageContainer>
          </Route>
          <Route exact path="/login">
            <PageContainer pageClass="page--gray page--login">
              <Login/>
            </PageContainer>
          </Route>
          <Route exact path="/favorites">
            <PageContainer>
              <FavoritesCards/>
            </PageContainer>
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
