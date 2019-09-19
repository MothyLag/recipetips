import React from 'react';
import { ILoginFormProps } from './formlogin.interfaces';
import { InputText } from '../txtInput/txtInput';
import styles from '../loginPage/login.module.css';
import { useInput } from '../txtInput/input.hook';
import { Redirect } from 'react-router';
export const FormLogin = function(props: ILoginFormProps) {
  const { value: userName, bind: bindUserName } = useInput('');
  const { value: password, bind: bindPassword } = useInput('');
  const handleSubmit = (e: React.FormEvent) => {
    alert(userName + ' , ' + password + '');
    e.preventDefault();
  };
  return (
    <form
      id="loginForm"
      className={styles.formContainer}
      onSubmit={handleSubmit}
    >
      <InputText name="Nombre" {...bindUserName} />
      <InputText name="contraseña" type="password" {...bindPassword} />
      <a className="forgotTxt" href="/home">
        ¿Olvidaste tu contraseña?
      </a>
    </form>
  );
};
