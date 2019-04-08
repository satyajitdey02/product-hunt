import React from 'react';
import Vote from "./Vote";
import ByLine from "./ByLine";

const ResultItem = ({item}) => {
  return (
      <li className="result-item clearfix">
        <a href={item.url} className="product-link">
          <div className="thumbnail">
            <img
                src={item.image}
                alt="Prod-1"/>
          </div>
          <div className="content">
            <Vote score={item.vote}/>

            <h3 className="title">{item.title}</h3>

            <p className="leadtext">{item.leadtext}</p>

            <ByLine/>
          </div>
        </a>
      </li>
  );
};

ResultItem.propTypes = {};

export default ResultItem;
