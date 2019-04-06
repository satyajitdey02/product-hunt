import React from 'react';
import ResultItem from "./ResultItem";
import PropTypes from 'prop-types';

const ResultList = ({list}) => {
  let liMarkup = list.map(
      item => <ResultItem key={item.id} item={item}/>);
  return (
      <ul className="col result-list">
        {liMarkup}
      </ul>
  );
};

ResultList.propTypes = {list: PropTypes.array};

export default ResultList;