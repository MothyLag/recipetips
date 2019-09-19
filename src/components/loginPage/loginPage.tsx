import React, { Component, useState } from 'react';
import styles from './login.module.css';
import { FooterButton } from '../footerButton/footerButton';
import { FormLogin } from '../formLogin/formLogin';
import Hammer from 'hammerjs';
import { Redirect } from 'react-router';
import { State } from './loginPage.interfaces';

class LoginPage extends Component<{}, State> {
  container: HTMLElement;
  constructor(props: any) {
    super(props);
    this.state = { register: false };
    this.container = document.getElementById('container') as HTMLElement;
  }
  componentDidMount() {
    this.container = document.getElementById('container') as HTMLElement;
    const hammertime = new Hammer(this.container);
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_RIGHT });
    hammertime.on('swipe', (evt: any) => {
      this.setState({ register: true });
    });
  }

  render() {
    if (this.state.register) return <Redirect to="/signUp" />;
    return (
      <div id="container" className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>RecipeTips</h1>
        </div>
        <div className={styles.main}>
          <FormLogin />
        </div>
        <div className="footer">
          <FooterButton text="Entrar" form="loginForm" />
        </div>
      </div>
    );
  }
}

export default LoginPage;
