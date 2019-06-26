import React from 'react';
import SearchBar from "./SearchBar";
import Authentication from "./Authentication";

const NavigationBar = ({onSearch}) => {

  return (
      <div className="row nav-bar sticky">
        <SearchBar onSearchChange={onSearch}/>
        <div className="col-md-2 auth-bar">
          <span>
            <Authentication/>
          </span>
        </div>
      </div>
  );
};

export default NavigationBar;