import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../reducers/UserRedux'
import UserActions from '../../reducers/UserRedux';
import button from 'react';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return(
      <div>
        <h1>GAMES - REV webmaster</h1>
          <p>
            <button className="default" onClick={(e) => this.handleLogin(e)}>LOGIN</button>
            <button className="default"  onClick={(e) => this.handleLogin(e)}>REGISTER</button>
          </p>
      </div>
    )
  }

  handleLogin(e){
    this.setState({email: e.target.value})
  }

  handlePassword(e){
    this.setState({password: e.target.value})
  }
}


export default LoginPage
