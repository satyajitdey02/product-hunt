import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Vote extends Component {
  state = {
    score : 0
  };

  render() {
    return (
        <div className="vote">
          &#x25B2;
          <span> 201</span>
        </div>
    );
  }
}

Vote.propTypes = {};

export default Vote;