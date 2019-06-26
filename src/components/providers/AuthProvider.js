import React, {Component} from 'react';
import AuthContext from './../../context/AuthContext';

export default class AuthProvider extends Component {

  render() {
    return (
        <AuthContext.Provider
            value={{
              userObj: this.props.userObj,
              onLoginClick: this.props.onLoginClick,
              onLogoutClick: this.props.onLogoutClick
            }}>
          {this.props.children}
        </AuthContext.Provider>
    );
  }
}