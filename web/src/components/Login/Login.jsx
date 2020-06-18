import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import "./Login.scss";
import facebook from "../../assets/img/facebook.svg";
import twitter from "../../assets/img/twitter.svg";
import linkedin from "../../assets/img/linkedin.svg";
import google from "../../assets/img/google.svg";

const Login = function () {
  return (
    <div>
      <LoginForm />

      <span className="login__link">Esqueci minha senha ❯</span>

      <div className="login__social">
        <p className="login__desc">Faça seu login usando</p>
        <div className="login__social-links">
          <img src={facebook} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
          <img src={linkedin} alt="Linkedin" />
          <img src={google} alt="Google" />
        </div>
      </div>

      <Link
        to="/register"
        className="button is-large is-primary is-block is-outline login__register-button"
      >
        Não tenho login
      </Link>

      <span className="login__link login__help">Central de Ajuda</span>
    </div>
  );
};

export default Login;
