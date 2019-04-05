import React, {Component} from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
        <div className="container App">
          <header className="row header">
            <h3 class="col">Popular Products</h3>
            <hr/>
          </header>

          <div className="row search-bar">
            <div className="col">
              <input placeholder="Search Products"/>
            </div>
          </div>

          <div className="row search-results">
            <ul className="col result-list">
              <li className="result-item">

                <a href="/" className="product-link">

                  <div className="thumbnail">
                    <img src="https://ph-files.imgix.net/fba5b9a4-0d3c-4806-ba4b-10f27398c60d?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2" alt="Prod-1"/>
                  </div>
                  <div className="product-info">
                    <div className="vote">
                      &#x25B2;
                      <span> 4</span>
                    </div>
                    <h3 className="title">
                      Product Mindset
                    </h3>
                    <p className="leadtext">Free book on how to get inside
                      your customer’s mind</p>

                    <div className="credit">
                      <span className="submitted">Submitted By: </span>
                      <img
                          src="https://abs.twimg.com/sticky/default_profile_images/default_profile_4_normal.png"
                          alt="Submitted By"/>
                    </div>

                  </div>
                </a>
              </li>
              <li className="result-item">

                <a href="/" className="product-link">

                  <div className="thumbnail">
                    <img src="https://ph-files.imgix.net/fba5b9a4-0d3c-4806-ba4b-10f27398c60d?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2" alt="Prod-2"/>
                  </div>
                  <div className="product-info">
                    <div className="vote">
                      &#x25B2;
                      <span> 3</span>
                    </div>
                    <h3 className="title">
                      Product Mindset
                    </h3>
                    <p className="leadtext">Free book on how to get inside
                      your customer’s mind</p>

                    <div className="credit">
                      <span className="submitted">Submitted By: </span>
                      <img
                          src="https://abs.twimg.com/sticky/default_profile_images/default_profile_4_normal.png"
                          alt="Submitted By"/>
                    </div>

                  </div>
                </a>
              </li>
              <li className="result-item">

                <a href="/" className="product-link">

                  <div className="thumbnail">
                    <img src="https://ph-files.imgix.net/fba5b9a4-0d3c-4806-ba4b-10f27398c60d?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2" alt="Prod-3"/>
                  </div>
                  <div className="product-info">
                    <div className="vote">
                      &#x25B2;
                      <span> 2</span>
                    </div>
                    <h3 className="title">
                      Product Mindset
                    </h3>
                    <p className="leadtext">Free book on how to get inside
                      your customer’s mind</p>

                    <div className="credit">
                      <span className="submitted">Submitted By: </span>
                      <img
                          src="https://abs.twimg.com/sticky/default_profile_images/default_profile_4_normal.png"
                          alt="Submitted By"/>
                    </div>

                  </div>
                </a>
              </li>
              <li className="result-item">

                <a href="/" className="product-link">

                  <div className="thumbnail">
                    <img src="https://ph-files.imgix.net/fba5b9a4-0d3c-4806-ba4b-10f27398c60d?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2" alt="Prod-4"/>
                  </div>
                  <div className="product-info">
                    <div className="vote">
                      &#x25B2;
                      <span> 1</span>
                    </div>
                    <h3 className="title">
                      Product Mindset
                    </h3>
                    <p className="leadtext">Free book on how to get inside
                      your customer’s mind</p>

                    <div className="credit">
                      <span className="submitted">Submitted By: </span>
                      <img
                          src="https://abs.twimg.com/sticky/default_profile_images/default_profile_4_normal.png"
                          alt="Submitted By"/>
                    </div>

                  </div>
                </a>
              </li>
            </ul>
          </div>

        </div>
    );
  }
}

export default App;
