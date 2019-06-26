import React from 'react';
import AuthContext from './../../context/AuthContext';

export function withAuthContext(Component) {
  return function WrapperComponent(props) {
    return (
        <AuthContext.Consumer>
          {({userObj, onLoginClick, onLogoutClick}) => (
              <Component
                  {...props}
                  userObj={userObj}
                  onLoginClick={onLoginClick}
                  onLogoutClick={onLogoutClick}
              />)}
        </AuthContext.Consumer>
    );
  }
}