import React, {Component} from 'react';
import ResultItem from "./ResultItem";

class ResultList extends Component {
  state = {
    list: []
  };

  render(){
    return(
        <ul className="col result-list">
          <ResultItem key={1}/>
          <ResultItem key={2}/>
          <ResultItem key={3}/>
          <ResultItem key={4}/>
        </ul>
    );
  }
}

ResultList.propTypes = {};

export default ResultList;