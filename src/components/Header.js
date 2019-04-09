import React from 'react';

const Header = ({heading}) => {
  return (
      <header className="row header">
        <h3 className="col">{heading}</h3>
        <hr/>
      </header>
  );

};

export default Header;