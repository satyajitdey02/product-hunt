import React from 'react';
import PropTypes from 'prop-types';

const ByLine = ({credit}) => {

  return (
      <div className="credit">
        <span className="submitted">Submitted By: </span>
        <a href={credit.link}><img src={credit.photo.src}
                                   alt={credit.name} title={credit.name}/></a>
      </div>
  );

};

ByLine.propTypes = {
  credit: PropTypes.object
};

export default ByLine;