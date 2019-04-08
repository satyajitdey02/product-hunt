import React, {Component} from 'react';
import Vote from "./Vote";
import ByLine from "./ByLine";

class ResultItem extends Component {

  /*state = {
    result: this.props.item
  };*/

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
                  voteUp={this.voteUp}/>

            <a href={this.props.item.url} className="product-link"><h3
                className="title">{this.props.item.title}</h3></a>

            <p className="leadtext">{this.props.item.leadtext}</p>

            <ByLine/>
          </div>

        </li>
    );
  }

  voteUp() {
    /*console.log(this.state.result.item);
    this.state.result.item.vote += 1;
    console.log(`Vote: ${this.state.result.item.vote}`);*/
  }

}

export default ResultItem;
