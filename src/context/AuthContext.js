import React from 'react';

const AuthContex = React.createContext({
  userName: null,
  userInfo: {}
});

export default AuthContex;