import React, { Component } from 'react';
import LoginRouter from "./LoginRouter";
import {connect} from 'react-redux'
import { withRouter } from "react-router-dom";

class MainRouter extends Component {
  render () {
    const isLoggedIn = this.props.user != null;
    var router;

    if ((isLoggedIn) && (this.props.isLoading === false)) {
      router = <LoginRouter />;
    } else {
      router = <LoginRouter />;
    }

    return router

  }
}

const mapStateToProps = state => ({
    isLoading: state.user.fetching,
    user: state.user.data
});

export default withRouter(connect(
  mapStateToProps,
  null
)(MainRouter))
