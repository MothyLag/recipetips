import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/loginPage/loginPage';
import { DashbordPage } from './components/DashbordPage/DashbordPage';
import { registerPage } from './components/RegisterPage/registerPage';

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={DashbordPage} />
        <Route exact path="/SignUp" component={registerPage} />
      </Switch>
    </Router>
  );
}

export default App;
