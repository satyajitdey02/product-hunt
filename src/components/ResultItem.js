import React, {Component} from 'react';
import Vote from "./Vote";
import ByLine from "./ByLine";

class ResultItem extends Component {
  state = {
    vote: 0
  };

  render() {
    return (
        <li className="resultItem clearLeft">
          <div className="itemWrapper">
            <a href="/" className="productLink">

              <div className="thumbnail">
                <img
                    src="https://ph-files.imgix.net/fba5b9a4-0d3c-4806-ba4b-10f27398c60d?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2"
                    alt="Prod-1"/>
              </div>
              <div className="content">
                <Vote/>
                <h3 className="prodTitle">
                  Product Mindset
                </h3>
                <p className="prodDetails">Free book on how to get inside
                  your customer’s mind</p>

                <ByLine/>

              </div>
            </a>
          </div>
        </li>
    );
  }
}

ResultItem.propTypes = {};

export default ResultItem;
