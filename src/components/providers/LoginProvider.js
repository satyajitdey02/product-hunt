import React, {Component} from 'react';
import LoginContext from './../../context/LoginContext';

export default class LoginProvider extends Component {

  render() {
    return (
        <LoginContext.Provider
            value={{
              userObj: this.props.userObj,
              onLoginClick: this.props.onLoginClick,
              onLogoutClick: this.props.onLogoutClick
            }}>
          {this.props.children}
        </LoginContext.Provider>
    );
  }
}