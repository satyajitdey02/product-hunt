import React, {Component} from 'react';
import Vote from "./Vote";
import ByLine from "./ByLine";
import PropTypes from 'prop-types';

class ResultItem extends Component {



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
    this.props.onSearchItemLoad(this.props.item.id);
  };

}

ResultItem.propTypes = {
  item: PropTypes.object,
  onSearchItemLoad: PropTypes.func
};

export default ResultItem;
