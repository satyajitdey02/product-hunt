import React from 'react';

const AuthBar = (props) => {
  return (
      <div className="col-md-2 auth-bar">
        <span><a href="#">LOGIN</a> | <a href="#">LOGOUT</a></span>
      </div>
  );
};

export default AuthBar;