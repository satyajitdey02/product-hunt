import React from 'react';
import PropTypes from 'prop-types';

const ByLine = () => {

  return (
      <div className="credit">
        <span className="submitted">Submitted By: </span>
        <img
            src="https://abs.twimg.com/sticky/default_profile_images/default_profile_4_normal.png"
            alt="Submitted By"/>
      </div>
  );

};

ByLine.propTypes = {};

export default ByLine;