import React from 'react';

const MessageBox = ({message}) => {

  console.log('Inside Message Box!')
  return (
      <p className="message-box">{message}</p>
  );

};

export default MessageBox;