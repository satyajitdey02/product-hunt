import React from 'react';
import {withLoginContext} from "./hoc/withLoginContext";

const LoginLogoutButton = (props) => {
  const {userObj, onLoginClick, onLogoutClick} = props;
  console.log('Login context val')
  console.log(userObj)
  return (
      <React.Fragment>
        {userObj && userObj.userName
            ? <a href="#" onClick={onLogoutClick}>Logout</a>
            : <a href="#" onClick={onLoginClick}>Login</a>
        }
      </React.Fragment>
  );
};

export default withLoginContext(LoginLogoutButton);