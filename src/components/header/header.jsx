import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {selectUser} from "../../store/user/selectors";
import {routerPath} from "../../const";

const Header = (props) => {
  const {user} = props;
  const avatarWrapperStyle = user.avatarUrl ? {backgroundImage: `url(${user.avatarUrl})`} : null;
  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={routerPath.MAIN}>
                <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={user.id ? routerPath.FAVOURITES : routerPath.LOGIN}>
                    <div className="header__avatar-wrapper user__avatar-wrapper" style={avatarWrapperStyle}>
                    </div>
                    <span className="header__login">{user.email || `Sign in`}</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string
  }).isRequired
};

const mapStateToProps = (state) => ({
  user: selectUser(state)
});

export {Header};
export default connect(mapStateToProps)(Header);
