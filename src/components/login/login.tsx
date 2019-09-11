import React, { Component } from "react";
import "./login.css";
import { InputText } from "../txtInput/txtInput";
import { FooterButton } from "../footerButton/footerButton";
class Login extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <h1 className="title">RecipeTips</h1>
        </div>
        <div className="main">
          <div className="formContainer">
            <InputText name="Nombre"></InputText>
            <InputText name="contraseña" type="password"></InputText>
            <a className="forgotTxt" href="#">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
        <div className="footer">
          <FooterButton text="Entrar"></FooterButton>
        </div>
      </div>
    );
  }
}

export default Login;
