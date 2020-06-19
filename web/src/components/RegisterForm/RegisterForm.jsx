import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import classnames from "classnames";
import API from "../../services/API";
import "./RegisterForm.scss";

function RegisterForm() {
  const alert = useAlert();
  const history = useHistory();

  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [cpf, setCpf] = useState("");
  const [newsletter, setNewsletter] = useState(true);
  const funcs = {
    setName,
    setEmail,
    setPassword,
    setPassword_confirmation,
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
      const res = await API.post("user", {
        name,
        email,
        password,
        password_confirmation,
        gender,
        phone,
        country,
        cpf,
        newsletter,
      });

      if (res.status === 201) {
        alert.show("User successfully registered!", { type: "success" });
        history.push("/");
      }
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

        setErrors(errorsBag);
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
          className={classnames({
            "register-form__input": true,
            "has-text-danger": errors.name,
          })}
          placeholder="Nome completo"
          value={name}
          onChange={handleChange}
        />
        {errors.name && (
          <p className="register-form__help has-text-danger">{errors.name}</p>
        )}
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
          className={classnames({
            "register-form__input": true,
            "has-text-danger": errors.email,
          })}
          placeholder="Seu endereço de e-mail"
          value={email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="register-form__help has-text-danger">{errors.email}</p>
        )}
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
          className={classnames({
            "register-form__input": true,
            "has-text-danger": errors.password,
          })}
          placeholder="Senha de acesso"
          value={password}
          onChange={handleChange}
        />
        {errors.password && (
          <p className="register-form__help has-text-danger">
            {errors.password}
          </p>
        )}
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
          className={classnames({
            "register-form__input": true,
            "has-text-danger": errors.password_confirmation,
          })}
          placeholder="Insira novamente sua senha"
          value={password_confirmation}
          onChange={handleChange}
        />
        {errors.password_confirmation && (
          <p className="register-form__help has-text-danger">
            {errors.password_confirmation}
          </p>
        )}
      </div>

      {/* Gender */}
      <div className="register-form__control">
        <label htmlFor="gender" className="register-form__label">
          Gênero
        </label>
        <select
          id="gender"
          name="gender"
          className={classnames({
            "register-form__select": true,
            "has-text-danger": errors.gender,
          })}
          value={gender}
          onChange={handleChange}
        >
          <option value="">Selecione</option>
          <option value="m">Masculino</option>
          <option value="f">Feminino</option>
        </select>
        {errors.gender && (
          <p className="register-form__help has-text-danger">{errors.gender}</p>
        )}
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
          className={classnames({
            "register-form__input": true,
            "has-text-danger": errors.phone,
          })}
          placeholder="Insira seu telefone com DDD"
          value={phone}
          onChange={handleChange}
        />
        {errors.phone && (
          <p className="register-form__help has-text-danger">{errors.phone}</p>
        )}
      </div>

      {/* Country */}
      <div className="register-form__control">
        <label htmlFor="country" className="register-form__label">
          País
        </label>
        <input
          id="country"
          type="text"
          name="country"
          className={classnames({
            "register-form__input": true,
            "has-text-danger": errors.country,
          })}
          placeholder="Informe seu país"
          value={country}
          onChange={handleChange}
        />
        {errors.country && (
          <p className="register-form__help has-text-danger">
            {errors.country}
          </p>
        )}
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
          className={classnames({
            "register-form__input": true,
            "has-text-danger": errors.cpf,
          })}
          placeholder="Insira seu número de CPF"
          value={cpf}
          onChange={handleChange}
        />
        {errors.cpf && (
          <p className="register-form__help has-text-danger">{errors.cpf}</p>
        )}
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
