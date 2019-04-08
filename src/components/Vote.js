import React from 'react';

const Vote = ({score}) => {
  return (
      <div className="vote">
        &#x25B2;
        <span> {score}</span>
      </div>
  );
};

Vote.propTypes = {};

export default Vote;