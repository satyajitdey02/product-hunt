import React, {Component} from 'react';
import ResultItem from "./ResultItem";
import MessageBox from "./MessageBox";

import PropTypes from 'prop-types';

class ResultList extends Component {

  render() {
    if (this.props.searchResults.length <= 0) {
      let message = `No result found for the query: "${this.props.searchTerm}"`;
      return (<MessageBox message={message}/>);
    }

    let liMarkup = this.props.searchResults.map(
        item => <ResultItem key={item.id}
                            item={item}
                            onSearchItemLoad={this.props.onSearchResultsLoad}/>);
    return (<ul className="col result-list">
      {liMarkup}
    </ul>);
  }
}

ResultList.propTypes = {
  searchTerm: PropTypes.string,
  searchResults: PropTypes.array,
  onSearchResultsLoad: PropTypes.func,
};

export default ResultList;