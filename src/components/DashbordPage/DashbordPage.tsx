import React, { Component } from "react";
import styles from "./DashbordPage.module.css";
import { NavBar } from "../navBar/navBar";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
export class DashbordPage extends Component {
  render() {
    if (0 == 0) return <Redirect to="/" />;
    return (
      <Router>
        <div className={styles.wrapper}>
          <NavBar></NavBar>
          <h1>Hola inicio</h1>
        </div>
      </Router>
    );
  }
}
