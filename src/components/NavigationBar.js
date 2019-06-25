import React from 'react';
import SearchBar from "./SearchBar";
import LoginLogoutButton from "./LoginLogoutButton";

const NavigationBar = ({onSearch}) => {

  return (
      <div className="row nav-bar sticky">
        <SearchBar onSearchChange={onSearch}/>
        <div className="col-md-2 auth-bar">
          <span>
            <LoginLogoutButton/>
          </span>
        </div>
      </div>
  );
};

export default NavigationBar;