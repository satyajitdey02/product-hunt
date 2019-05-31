import React from 'react';

const AuthBar = (props) => {
  return (
      <div className="col-md-2 auth-bar">
        <span><a href="#">Login</a> | <a href="#">Logout</a></span>
      </div>
  );
};

export default AuthBar;