import React from 'react';
import PropTypes from 'prop-types';

const Header = ({heading}) => {
  return (
      <header className="row header">
        <h3 className="col">{heading}</h3>
        <hr/>
      </header>
  );

};

Header.propTypes = {
  heading: PropTypes.string
};

export default Header;