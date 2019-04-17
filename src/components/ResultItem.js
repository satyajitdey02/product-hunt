import React, {Component} from 'react';
import Vote from "./Vote";
import ByLine from "./ByLine";
import PropTypes from 'prop-types';

class ResultItem extends Component {

  state = {
    result: this.props.item
  };

  render() {
    return (
        <li className="result-item clearfix">

          <div className="thumbnail">
            <img
                src={this.props.item.image}
                alt="Prod-1"/>
          </div>
          <div className="content">
            <Vote score={this.props.item.vote}
                  onVoteUp={this.onVoteUp}/>

            <a href={this.props.item.url} className="product-link"><h3
                className="title">{this.props.item.title}</h3></a>

            <p className="leadtext">{this.props.item.leadtext}</p>

            <ByLine credit={this.props.item.credit}/>
          </div>

        </li>
    );
  }

  onVoteUp = () => {
    //TODO: Not a good idea to mutate state as like following without setState.
    //Dear Instructors, Can we do something better?
    this.state.result.vote = this.state.result.vote + 1;
    this.props.onSearchItemLoad();
  };

}

ResultItem.propTypes = {
  voteUp: PropTypes.func
};

export default ResultItem;
