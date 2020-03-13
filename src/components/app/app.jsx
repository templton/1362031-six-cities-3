import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Header from "../header/header";
import Main from "../main/main";
import CardDetail from "../card-detail/card-detail";
import Login from "../login/login";
import FavoritesCards from "../favorites-cards/favorites-cards";
import {CardDeatail} from "../../mocks/carddetail";
import PageContainer from "../page-container/page-container";
import {reviews} from "../../mocks/review-list";
import {neighbourhoodPlaces} from "../../mocks/offers";
import EmptyContent from "../empty-content/empty-content";
import {selectPlacesInCity} from "../../store/places-in-city/selectors";

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

    if (this.props.offers.length === 0) {
      return (
        <PageContainer pageClass="page--gray page--main">
          <EmptyContent/>
        </PageContainer>
      );
    }

    if (this.state.currentCityPlaceCardId) {
      return (
        <div className="page page--gray page--main">
          <Header/>
          <CardDetail
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
              <Main onClickCardTitle={this.handleClickCardTitle}/>
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

const mapStateToProps = (state) => ({
  offers: selectPlacesInCity(state)
});

export {App};
export default connect(mapStateToProps)(App);
