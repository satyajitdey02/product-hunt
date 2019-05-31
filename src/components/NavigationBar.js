import React from 'react';
import SearchBar from "./SearchBar";
import AuthBar from "./AuthBar";


const NavigationBar = (props) => {
  return (
      <div className="row nav-bar sticky">
        <SearchBar onSearchChange={term => this.onSearch(term)}/>
        <AuthBar />
      </div>
  );
};

export default NavigationBar;