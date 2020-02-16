import React, {PureComponent} from "react";

class Login extends PureComponent{
  constructor(props) {
    super(props);

    this.state = {
      email: ``,
      password: ``,
      color: `синий`
    };

    this.handleFromSubmit = this.handleFromSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  handleFromSubmit(event) {
    event.preventDefault();
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleChangeColor(event) {
    console.log(event);
    this.setState({
      color: event.value
    });
  }

  render() {
    const colors = [`красный`,`белый`,`оранжевый`,`желтый`,`синий`];
    return (
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={this.handleFromSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" value={this.state.email} onChange={this.handleChangeEmail} name="email" placeholder="Email" required=""/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" value={this.state.password} onChange={this.handleChangePassword} name="password" placeholder="Password" required=""/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Ярлычок</label>
                <select name="color" id="color" value={this.state.color} onChange={this.handleChangeColor}>
                  {
                    colors.map((cc) => {
                      return (<option key={cc} value={cc}>{cc}</option>);
                    })
                  }
                </select>
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

export default Login;
