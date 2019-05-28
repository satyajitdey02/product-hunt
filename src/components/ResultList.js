import React from 'react';
import ResultItem from "./ResultItem";
import MessageBox from "./MessageBox";

import PropTypes from 'prop-types';

const ResultList = ({searchTerm, searchResults, onSearchResultsReload}) => {

  if (searchResults.length <= 0) {
    let message = `No result found for the query: "${searchTerm}"`;
    return (<MessageBox message={message}/>);
  }

  let liMarkup = searchResults.map(
      item => <ResultItem key={item.id}
                          item={item}
                          onSearchItemReload={() => onSearchResultsReload(item.id)}/>);
  return (<ul className="col result-list">
    {liMarkup}
  </ul>);

}

ResultList.propTypes = {
  searchTerm: PropTypes.string,
  searchResults: PropTypes.array,
  onSearchResultsReload: PropTypes.func,
};

export default ResultList;