import React, { Component } from "react";
import { Link } from 'react-router-dom';
import button from 'react';
import LoginPage from './LoginPage/Login.js';

class HomePage extends Component {

  render() {

    return(
        <div>
          <h1>GAMES - REV web</h1>
          <Link to='/login'>Login</Link>
          <button className="default">REGISTER</button>
        </div>
    );
  }
}


export default HomePage;
