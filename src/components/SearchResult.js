import React from 'react';
import ResultItem from "./ResultItem";
import MessageBox from "./MessageBox";

import PropTypes from 'prop-types';
import Header from "./Header";

const SearchResult = ({searchTerm, searchResults, onSearchResultsReload}) => {

  if (searchResults.length <= 0) {
    let message = `No result found for the query: "${searchTerm}"`;
    return (<MessageBox message={message}/>);
  }

  let liMarkup = searchResults.map(
      item => <ResultItem key={item.id}
                          item={item}
                          onSearchItemReload={() => onSearchResultsReload(
                              item.id)}/>);
  return (
      <div className="row search-results">
        <Header heading='Popular Products'/>
        <ul className="col-md-12 result-list">
          {liMarkup}
        </ul>
      </div>);

}

SearchResult.propTypes = {
  searchTerm: PropTypes.string,
  searchResults: PropTypes.array,
  onSearchResultsReload: PropTypes.func,
};

export default SearchResult;