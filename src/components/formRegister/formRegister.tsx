import React from 'react';
import { IRegisterProps } from './formRegister.interfaces';
import styles from '../RegisterPage/register.module.css';
import { InputText } from '../txtInput/txtInput';

export const FormRegister = (props: IRegisterProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('alto ahi vaquero');
  };
  return (
    <form
      id={props.id}
      className={styles.formContainer}
      onSubmit={handleSubmit}
    >
      <InputText name="nombre de usuario" />
      <InputText name="correo electronico" />
      <InputText name="contraseña" type="password" />
      <InputText name="confirmar contraseña" type="password" />
    </form>
  );
};
