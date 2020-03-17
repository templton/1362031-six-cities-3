import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {selectUser} from "../../store/user/selectors";

const Header = (props) => {
  const {user} = props;
  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src={user.avatarUrl || `/img/logo.svg`} alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">{user.email || `Sign in`}</span>
                  </a>
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
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: selectUser(state)
});

export {Header};
export default connect(mapStateToProps)(Header);
