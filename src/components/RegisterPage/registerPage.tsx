import React, { Component } from 'react';
import styles from '../loginPage/login.module.css';
import { FooterButton } from '../footerButton/footerButton';
import { FormRegister } from '../formRegister/formRegister';
import { State } from './register.interfaces';
import Hammer from 'hammerjs';
import { Redirect } from 'react-router';
export class registerPage extends Component<{}, State> {
  container: HTMLElement;
  constructor(props: any) {
    super(props);
    this.container = document.getElementById('container') as HTMLElement;
    this.state = { login: false };
  }
  componentDidMount() {
    this.container = document.getElementById('container') as HTMLElement;
    const hammertime = new Hammer(this.container);
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_LEFT });
    hammertime.on('swipe', (evt: any) => {
      this.setState({ login: true });
    });
  }
  render() {
    if (this.state.login) return <Redirect to="/" />;
    return (
      <div id="container" className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>RecipeTips</h1>
        </div>
        <div className={styles.main}>
          <FormRegister id="FormRegister" />
        </div>
        <div className={styles.footer}>
          <FooterButton text="Registrarse" form="FormRegister"></FooterButton>
        </div>
      </div>
    );
  }
}
