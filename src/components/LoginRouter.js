import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './LoginPage/Login';

class LoginRouter extends Component {

  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default LoginRouter
