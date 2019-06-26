import React from 'react';
import {withAuthContext} from "./hoc/withAuthContext";

const Authentication = (props) => {
  const {userObj, onLoginClick, onLogoutClick} = props;
  console.log(userObj);
  return (
      <React.Fragment>
        {userObj && userObj.userName
            ? <a href="#" onClick={onLogoutClick}>Logout</a>
            : <a href="#" onClick={onLoginClick}>Login</a>
        }
      </React.Fragment>
  );
};

export default withAuthContext(Authentication);