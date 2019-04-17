import React, {Component} from 'react';

class Vote extends Component {

  render() {
    return (
        <button className="vote" onClick={this.props.onVoteUp}>
          <img src="triangle.png" alt=""/>
          <span className="score">&nbsp;&nbsp;{this.props.score}</span>
        </button>
    );
  }
}

Vote.propTypes = {};

export default Vote;