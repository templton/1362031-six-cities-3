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
import {selectPlacesInCurrentCity} from "../../store/places-in-city/selectors";
import {selectLoading} from "../../store/all-hotels/selectors";
import EmptyContent from "../empty-content/empty-content";
import {Operation as AllHotelsOperation} from "../../store/all-hotels/reducers";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    const {offers, loading, loadNearbyHotels} = this.props;

    if (loading) {
      return (
        <EmptyContent/>
      );
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <PageContainer pageClass={offers.length > 0 ? `page--gray page--main` : `page--gray page--main`}>
              <Main/>
            </PageContainer>
          </Route>
          <Route exact path="/hotel/:hotelId" render={ ({match})=>{
            loadNearbyHotels(+match.params.hotelId);
            return (<div className="page page--gray page--main">
              <Header/>
              <CardDetail
                hotelId={+match.params.hotelId}
                reviews={reviews}
                neighbourhoodPlaces={neighbourhoodPlaces}
              />
            </div>);
          } }/>
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
  loading: PropTypes.bool.isRequired,
  loadNearbyHotels: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: selectPlacesInCurrentCity(state),
  loading: selectLoading(state)
});

const mapDispatchToProps = ({
  loadNearbyHotels: AllHotelsOperation.loadNearbyHotels
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
