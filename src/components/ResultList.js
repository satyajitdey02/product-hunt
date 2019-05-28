import React from 'react';
import ResultItem from "./ResultItem";
import MessageBox from "./MessageBox";

import PropTypes from 'prop-types';

const ResultList = ({searchTerm, searchResults, onSearchResultsLoad}) => {
  const onSearchItemLoad = (id) => {
    onSearchResultsLoad(id);
  };

  if (searchResults.length <= 0) {
    let message = `No result found for the query: "${searchTerm}"`;
    return (<MessageBox message={message}/>);
  }

  let liMarkup = searchResults.map(
      item => <ResultItem key={item.id}
                          item={item}
                          onSearchItemLoad={() => onSearchItemLoad(item.id)}/>);
  return (<ul className="col result-list">
    {liMarkup}
  </ul>);

}

ResultList.propTypes = {
  searchTerm: PropTypes.string,
  searchResults: PropTypes.array,
  onSearchResultsLoad: PropTypes.func,
};

export default ResultList;