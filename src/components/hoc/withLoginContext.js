import React from 'react';
import LoginContext from './../../context/LoginContext';

export function withLoginContext(Component) {
  return function WrapperComponent(props) {
    return (
        <LoginContext.Consumer>
          {(userObj) => <Component {...props} loginContext={userObj}/>}
        </LoginContext.Consumer>
    );
  }
}