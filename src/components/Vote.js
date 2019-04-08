import React, {Component} from 'react';

class Vote extends Component {

  render() {
    return (
        <button className="vote" onClick={this.props.voteUp}>
          &#x25B2;
          <span> {this.props.score}</span>
        </button>
    );
  }
}

Vote.propTypes = {};

export default Vote;