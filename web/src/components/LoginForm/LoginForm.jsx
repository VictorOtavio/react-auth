import React, { useState } from "react";
import { useAlert } from "react-alert";
import classnames from "classnames";
import API from "../../services/API";
import "./LoginForm.scss";

function LoginForm() {
  const alert = useAlert();

  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const funcs = { setErrors, setEmail, setPassword };

  const handleChange = (e) => {
    const name = e.target.name;
    const funcName = name.charAt(0).toUpperCase() + name.slice(1);

    funcs[`set${funcName}`](e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("auth", { email, password });
      alert.show(res.data.message, { type: "success" });
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
      } else if (error.response.status === 401) {
        alert.show(error.response.data.message, { type: "error" });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
            "has-text-danger": errors.email,
          })}
          placeholder="Seu endereço de e-mail"
          value={email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="login-form__help has-text-danger">{errors.email}</p>
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
            "has-text-danger": errors.password,
          })}
          placeholder="Senha de acesso"
          value={password}
          onChange={handleChange}
        />
        {errors.password && (
          <p className="login-form__help has-text-danger">{errors.password}</p>
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

export default LoginForm;
