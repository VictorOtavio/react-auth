import React from "react";
import RegisterForm from "../RegisterForm/RegisterForm";
import "./Register.scss";

const Register = function () {
  return (
    <div>
      <h1 className="register__title">Conclua seu cadastro</h1>
      <p className="register__desc">
        Preencha o formulário para
        <br />
        criar o seu login
      </p>
      <RegisterForm />
    </div>
  );
};

export default Register;
