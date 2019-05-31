import React from 'react';
import PropTypes from 'prop-types';

const Header = ({heading}) => {
  return (
      <header className="col-md-12 header">
        <h3>{heading}</h3>
        <hr/>
      </header>
  );
};

Header.propTypes = {
  heading: PropTypes.string
};

export default Header;