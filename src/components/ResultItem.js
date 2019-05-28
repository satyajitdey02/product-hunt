import React from 'react';
import Vote from "./Vote";
import ByLine from "./ByLine";
import PropTypes from 'prop-types';

const ResultItem = ({item, onSearchItemReload}) => {

  const {image, vote, title, leadtext, credit, url} = item;

  return (
      <li className="result-item clearfix">

        <div className="thumbnail">
          <img
              src={image}
              alt={title}/>
        </div>
        <div className="content">
          <Vote score={vote}
                onVoteUp={onSearchItemReload}/>

          <a href={url} className="product-link"><h3
              className="title">{title}</h3></a>

          <p className="leadtext">{leadtext}</p>

          <ByLine credit={credit}/>
        </div>

      </li>
  );

}

ResultItem.propTypes = {
  item: PropTypes.object,
  onSearchItemReload: PropTypes.func
};

export default ResultItem;
