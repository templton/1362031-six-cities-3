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
import {selectPlacesInCurrentCity} from "../../store/places-in-city/selectors";
import {selectCurrentCardId} from "../../store/selected-card/selectors";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.currentCityPlaceCardId) {
      return (
        <div className="page page--gray page--main">
          <Header/>
          <CardDetail
            images={CardDeatail.images}
            info={CardDeatail.info}
            owner={CardDeatail.owner}
            reviews={reviews}
            neighbourhoodPlaces={neighbourhoodPlaces}
          />
        </div>
      );
    }

    if (this.props.offers.length === 0) {
      return (
        <PageContainer pageClass="page--gray page--main">
          <EmptyContent/>
        </PageContainer>
      );
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <PageContainer pageClass="page--gray page--main">
              <Main/>
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
  offers: selectPlacesInCurrentCity(state),
  currentCityPlaceCardId: selectCurrentCardId(state)
});

export {App};
export default connect(mapStateToProps)(App);
