import React from 'react';
import LoginContext from './../../context/LoginContext';

export function withLoginContext(Component) {
  return function WrapperComponent(props) {
    return (
        <LoginContext.Consumer>
          {({userObj, onLoginClick, onLogoutClick}) => (
              <Component
                  {...props}
                  userObj={userObj}
                  onLoginClick={onLoginClick}
                  onLogoutClick={onLogoutClick}
              />)}
        </LoginContext.Consumer>
    );
  }
}