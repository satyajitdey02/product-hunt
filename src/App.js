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

        </div>
    );
  }
}

export default App;
