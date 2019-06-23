import React from 'react';
import SearchBar from "./SearchBar";
import AuthBar from "./AuthBar";


const NavigationBar = ({onSearch}) => {

  return (
      <div className="row nav-bar sticky">
        <SearchBar onSearchChange={onSearch}/>
        <AuthBar />
      </div>
  );
};

export default NavigationBar;