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
      <form onSubmit={this.handleSubmit}>
        {/* Name */}
        <div className="register__control">
          <label htmlFor="register_name" className="register__label">
            Nome
          </label>
          <input
            id="register_name"
            type="text"
            name="name"
            className="register_input"
            placeholder="Nome completo"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>

        {/* Email */}
        <div className="register__control">
          <label htmlFor="register_email" className="register__label">
            E-mail
          </label>
          <input
            id="register_email"
            type="email"
            name="email"
            className="register_input"
            placeholder="Seu endereço de e-mail"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>

        {/* Password */}
        <div className="register__control">
          <label htmlFor="register_password" className="register__label">
            Senha
          </label>
          <input
            id="register_password"
            type="password"
            name="password"
            className="register_input"
            placeholder="Senha de acesso"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>

        {/* Password Confirmation */}
        <div className="register__control">
          <label
            htmlFor="register_password_confirmation"
            className="register__label"
          >
            Repita a Senha
          </label>
          <input
            id="register_password_confirmation"
            type="password"
            name="password_confirmation"
            className="register_input"
            placeholder="Insira novamente sua senha"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
          />
        </div>

        {/* Gender */}
        <div className="register__control">
          <label htmlFor="register_gender" className="register__label">
            Gênero
          </label>
          <select
            id="register_gender"
            name="gender"
            className="register_select"
            value={this.state.gender}
            onChange={this.handleChange}
          >
            <option value="">Selecione</option>
            <option value="m">Masculino</option>
            <option value="f">Feminino</option>
          </select>
        </div>

        {/* Phone */}
        <div className="register__control">
          <label htmlFor="register_phone" className="register__label">
            Telefone
          </label>
          <input
            id="register_phone"
            type="text"
            name="phone"
            className="register_input"
            placeholder="Insira seu telefone com DDD"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </div>

        {/* Country */}
        <div className="register__control">
          <label htmlFor="register_country" className="register__label">
            País
          </label>
          <select
            id="register_country"
            name="country"
            className="register_select"
            value={this.state.country}
            onChange={this.handleChange}
          >
            <option value="">Selecione</option>
            <option value="m">Masculino</option>
            <option value="f">Feminino</option>
          </select>
        </div>

        {/* CPF */}
        <div className="register__control">
          <label htmlFor="register_cpf" className="register__label">
            CPF
          </label>
          <input
            id="register_cpf"
            type="text"
            name="cpf"
            className="register_input"
            placeholder="Insira seu número de CPF"
            value={this.state.cpf}
            onChange={this.handleChange}
          />
        </div>

        {/* Newsletter */}
        <div className="register__control">
          <label htmlFor="register_newsletter_1" className="register__label">
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

        <div className="register__control register__buttons">
          <button className="button is-primary is-large is-block">
            Cadastrar
          </button>
        </div>
      </form>
    );
  }
}

export default RegisterForm;
