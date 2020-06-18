import React from "react";
import classnames from "classnames";
import "./RegisterForm.scss";

class RegisterForm extends React.Component {
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
      <form className="register-form" onSubmit={this.handleSubmit}>
        {/* Name */}
        <div className="register-form__control">
          <label htmlFor="name" className="register-form__label">
            Nome
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="register-form__input"
            placeholder="Nome completo"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>

        {/* Email */}
        <div className="register-form__control">
          <label htmlFor="email" className="register-form__label">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="register-form__input"
            placeholder="Seu endereço de e-mail"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>

        {/* Password */}
        <div className="register-form__control">
          <label htmlFor="password" className="register-form__label">
            Senha
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="register-form__input"
            placeholder="Senha de acesso"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>

        {/* Password Confirmation */}
        <div className="register-form__control">
          <label
            htmlFor="password_confirmation"
            className="register-form__label"
          >
            Repita a Senha
          </label>
          <input
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            className="register-form__input"
            placeholder="Insira novamente sua senha"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
          />
        </div>

        {/* Gender */}
        <div className="register-form__control">
          <label htmlFor="gender" className="register-form__label">
            Gênero
          </label>
          <select
            id="gender"
            name="gender"
            className="register-form__select"
            value={this.state.gender}
            onChange={this.handleChange}
          >
            <option value="">Selecione</option>
            <option value="m">Masculino</option>
            <option value="f">Feminino</option>
          </select>
        </div>

        {/* Phone */}
        <div className="register-form__control">
          <label htmlFor="phone" className="register-form__label">
            Telefone
          </label>
          <input
            id="phone"
            type="text"
            name="phone"
            className="register-form__input"
            placeholder="Insira seu telefone com DDD"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </div>

        {/* Country */}
        <div className="register-form__control">
          <label htmlFor="country" className="register-form__label">
            País
          </label>
          <select
            id="country"
            name="country"
            className="register-form__select"
            value={this.state.country}
            onChange={this.handleChange}
          >
            <option value="">Selecione</option>
            <option value="m">Masculino</option>
            <option value="f">Feminino</option>
          </select>
        </div>

        {/* CPF */}
        <div className="register-form__control">
          <label htmlFor="cpf" className="register-form__label">
            CPF
          </label>
          <input
            id="cpf"
            type="text"
            name="cpf"
            className="register-form__input"
            placeholder="Insira seu número de CPF"
            value={this.state.cpf}
            onChange={this.handleChange}
          />
        </div>

        {/* Newsletter */}
        <div className="register-form__control">
          <label htmlFor="newsletter_1" className="register-form__label">
            Deseja receber nossa newsletter?
          </label>
          <button
            type="button"
            className={classnames({
              button: true,
              "is-small": true,
              "is-primary": true,
              "is-outline": !this.state.newsletter,
            })}
            onClick={this.toggleNewsletterOption}
          >
            Sim
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            type="button"
            className={classnames({
              button: true,
              "is-small": true,
              "is-primary": true,
              "is-outline": this.state.newsletter,
            })}
            onClick={this.toggleNewsletterOption}
          >
            Não
          </button>
        </div>

        <div className="register-form__control register-form__buttons">
          <button className="button is-primary is-large is-block">
            Cadastrar
          </button>
        </div>
      </form>
    );
  }
}

export default RegisterForm;
