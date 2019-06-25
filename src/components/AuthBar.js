import React from 'react';
import {withLoginContext} from "./hoc/withLoginContext";

const AuthBar = (props) => {
  const userObj = props.loginContext
  console.log('Login context val')
  console.log(userObj)
  return (
      <div className="col-md-2 auth-bar">
        <span>
          {userObj && userObj.userName
              ? <a href="#">Logout</a>
              : <a href="#">Login</a>
          }
        </span>
      </div>
  );
};

export default withLoginContext(AuthBar);