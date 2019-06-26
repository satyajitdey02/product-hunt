import React from 'react';
import PropTypes from 'prop-types';
import {withAuthContext} from "./hoc/withAuthContext";

const Vote = ({score, onVoteUp, userObj, onLoginClick}) => {

  return (

      <button
          className="vote"
          onClick={(e) => {
            userObj && userObj.userName ? onVoteUp(e) : onLoginClick(e)
          }}>
        <img src="triangle.png" alt="triangle.png"/>
        <span className="score">&nbsp;&nbsp;{score}</span>
      </button>
  );
}

Vote.propTypes = {
  score: PropTypes.number
};

export default withAuthContext(Vote);