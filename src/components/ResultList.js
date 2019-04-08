import React, {Component} from 'react';
import ResultItem from "./ResultItem";

class ResultList extends Component {

  render() {
    let liMarkup = this.props.list.map(
        item => <ResultItem key={item.id} item={item}/>);

    return (
        <ul className="col result-list">
          {liMarkup}
        </ul>
    );
  }
}

export default ResultList;