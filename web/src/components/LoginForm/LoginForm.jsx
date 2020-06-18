import React from "react";
import "./LoginForm.scss";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      gender: "",
      phone: "",
      country: "",
      cpf: "",
      newsletter: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleNewsletterOption = this.toggleNewsletterOption.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert("Um nome foi enviado: " + this.state.value);
    event.preventDefault();
  }

  toggleNewsletterOption(e) {
    e.preventDefault();
    this.setState({ newsletter: !this.state.newsletter });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Email */}
        <div className="login-form__control">
          <label htmlFor="email" className="login-form__label">
            Login
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="login-form__input"
            placeholder="Seu endereço de e-mail"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>

        {/* Password */}
        <div className="login-form__control">
          <label htmlFor="password" className="login-form__label">
            Senha
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="login-form__input"
            placeholder="Senha de acesso"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>

        <div className="login-form__control login-form__buttons">
          <button className="button is-primary is-large is-block">Login</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
