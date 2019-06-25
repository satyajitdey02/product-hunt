import React, { Component } from 'react';
import LoginContext from './../../context/LoginContext';

export default class LoginProvider extends Component {

  render() {
    return (
        <LoginContext.Provider value={this.props.userObj}>
          {this.props.children}
        </LoginContext.Provider>
    );
  }
}