import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {routerPath} from "../../const";
import {AuthStatusType} from "../../store/user/reducers";
import {selectAuthStatus} from "../../store/user/selectors";

const PrivateRoute = (props) => {
  const {path, render, exact, authStatus} = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        return (
          authStatus === AuthStatusType.AUTH
            ? render()
            : <Redirect to={routerPath.LOGIN} />);
      }}
    />
  );
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  render: PropTypes.func.isRequired,
  authStatus: PropTypes.bool
};

const mapStateToProps = (state) => ({
  authStatus: selectAuthStatus(state)
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
