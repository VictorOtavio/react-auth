import React, { useState, setState } from "react";
import classnames from "classnames";
import API from "../../services/API";
import "./RegisterForm.scss";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [cpf, setCpf] = useState("");
  const [newsletter, setNewsletter] = useState(true);
  const funcs = {
    setName,
    setEmail,
    setPassword,
    setPasswordConfirmation,
    setGender,
    setPhone,
    setCountry,
    setCpf,
    setNewsletter,
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const funcName = name.charAt(0).toUpperCase() + name.slice(1);

    funcs[`set${funcName}`](e.target.value);
  };

  const toggleNewsletterOption = (e) => {
    e.preventDefault();
    setNewsletter(!newsletter);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("auth", { email, password });
      alert(res.data.message);
    } catch (error) {
      if (error.response === undefined) {
        throw error;
      }

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

        setState({ errors: errorsBag });
      } else if (error.response.status === 401) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
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
          value={name}
          onChange={handleChange}
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
          value={email}
          onChange={handleChange}
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
          value={password}
          onChange={handleChange}
        />
      </div>

      {/* Password Confirmation */}
      <div className="register-form__control">
        <label htmlFor="password_confirmation" className="register-form__label">
          Repita a Senha
        </label>
        <input
          id="password_confirmation"
          type="password"
          name="password_confirmation"
          className="register-form__input"
          placeholder="Insira novamente sua senha"
          value={password_confirmation}
          onChange={handleChange}
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
          value={gender}
          onChange={handleChange}
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
          value={phone}
          onChange={handleChange}
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
          value={country}
          onChange={handleChange}
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
          value={cpf}
          onChange={handleChange}
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
            "is-outline": !newsletter,
          })}
          onClick={toggleNewsletterOption}
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
            "is-outline": newsletter,
          })}
          onClick={toggleNewsletterOption}
        >
          Não
        </button>
      </div>

      <div className="register-form__control register-form__buttons">
        <button type="submit" className="button is-primary is-large is-block">
          Cadastrar
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
