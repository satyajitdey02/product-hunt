import React from 'react';
import PropTypes from 'prop-types';

const Vote = ({score, onVoteUp}) => {

  return (
      <button className="vote" onClick={onVoteUp}>
        <img src="triangle.png" alt="triangle.png"/>
        <span className="score">&nbsp;&nbsp;{score}</span>
      </button>
  );
}

Vote.propTypes = {
  score: PropTypes.number
};

export default Vote;