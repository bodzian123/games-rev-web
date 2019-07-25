import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../reducers/UserRedux'
import UserActions from '../reducers/UserRedux';
import button from 'react';

class HomePage extends Component {
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
        <h1>GAMES - REV web</h1>
          <p>
            <button className="default">LOGIN</button>
            <button className="default">REGISTER</button>
          </p>
      </div>
    );
  }
}


export default HomePage
