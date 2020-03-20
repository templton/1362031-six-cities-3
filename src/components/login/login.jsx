import React, {PureComponent} from "react";
import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Operation as UserOperation} from "../../store/user/reducers";
import {selectAuthStatus} from "../../store/user/selectors";
import {routerPath} from "../../const";

class Login extends PureComponent {

  constructor(props) {
    super(props);

    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  render() {
    const {authStatus} = this.props;

    if (authStatus) {
      return <Redirect to={routerPath.MAIN}/>;
    }


    const handleSubmit = (event) => {
      const {onSubmit} = this.props;
      event.preventDefault();
      onSubmit(this.emailRef.current.value, this.passwordRef.current.value);
    };

    return (
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" defaultValue="ivan@mail.ru"
                  ref={this.emailRef} required=""/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" defaultValue="111111"
                  ref={this.passwordRef} required=""/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  authStatus: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  authStatus: selectAuthStatus(state)
});

const mapDispatchToProps = ({
  onSubmit: UserOperation.login
});

export {Login};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
