import React, {Component} from 'react';
import ResultItem from "./ResultItem";
import MessageBox from "./MessageBox";

class ResultList extends Component {

  render() {
    if (this.props.searchResults.length <= 0) {
      let message = `No result found for the query: "${this.props.searchTerm}"`;
      return (<MessageBox message={message}/>);
    }

    let liMarkup = this.props.searchResults.map(
        item => <ResultItem key={item.id}
                            item={item}
                            onSearchItemLoad={this.onSearchItemLoad}/>);
    return (<ul className="col result-list">
      {liMarkup}
    </ul>);
  }

  onSearchItemLoad = () => {
    this.props.onSearchResultsLoad();
  };
}

export default ResultList;