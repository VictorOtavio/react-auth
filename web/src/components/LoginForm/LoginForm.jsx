import React from "react";
import classnames from "classnames";
import API from "../../services/API";
import "./LoginForm.scss";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleNewsletterOption = this.toggleNewsletterOption.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await API.post("auth", {
        email: this.state.email,
        password: this.state.password,
      });

      alert(res.data.message);
    } catch (error) {
      if (error.response.status === 422) {
        const { errors } = error.response.data;
        const errorsBag = {};

        if (errors !== undefined) {
          errors.forEach((err) => {
            Object.keys(err).forEach((e) => {
              errorsBag[e] = err[e];
            });
          });
        }

        this.setState({ errors: errorsBag });
      } else if (error.response.status === 401) {
        alert(error.response.data.message);
      }
    }
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
            className={classnames({
              "login-form__input": true,
              "has-text-danger": this.state.errors.email,
            })}
            placeholder="Seu endereço de e-mail"
            value={this.state.email}
            onChange={this.handleChange}
          />
          {this.state.errors.email && (
            <p className="login-form__help has-text-danger">
              {this.state.errors.email}
            </p>
          )}
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
            className={classnames({
              "login-form__input": true,
              "has-text-danger": this.state.errors.password,
            })}
            placeholder="Senha de acesso"
            value={this.state.password}
            onChange={this.handleChange}
          />
          {this.state.errors.password && (
            <p className="login-form__help has-text-danger">
              {this.state.errors.password}
            </p>
          )}
        </div>

        <div className="login-form__control login-form__buttons">
          <button type="submit" className="button is-primary is-large is-block">
            Login
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
