import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Header from "../header/header";
import Main from "../main/main";
import CardDetail from "../card-detail/card-detail";
import Login from "../login/login";
import FavoritesCards from "../favorites-cards/favorites-cards";
import PageContainer from "../page-container/page-container";
import {reviews} from "../../mocks/review-list";
import {neighbourhoodPlaces} from "../../mocks/offers";
import EmptyContent from "../empty-content/empty-content";
import {selectPlacesInCurrentCity} from "../../store/places-in-city/selectors";
import {selectCurrentCardInfo} from "../../store/selected-card/selectors";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    const {cardDetail} = this.props;

    if (cardDetail) {
      return (
        <div className="page page--gray page--main">
          <Header/>
          <CardDetail
            info={cardDetail}
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
  offers: PropTypes.array.isRequired,
  cardDetail: PropTypes.object
};

const mapStateToProps = (state) => ({
  offers: selectPlacesInCurrentCity(state),
  cardDetail: selectCurrentCardInfo(state)
});

export {App};
export default connect(mapStateToProps)(App);
