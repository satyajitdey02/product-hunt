import React from 'react';
import PropTypes from 'prop-types';

const MessageBox = ({message}) => {
  return (
      <p className="message-box">{message}</p>
  );
};

MessageBox.propTypes = {
  message: PropTypes.string
};

export default MessageBox;