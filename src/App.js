import React, {Component} from 'react';
import SearchBar from "./components/SearchBar";
import ResultItem from "./components/ResultItem";
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="container App">
          <header className="row header">
            <h3 class="col">Popular Products</h3>
            <hr/>
          </header>

          <SearchBar onSearchChange={term => this.onSearch(term)}/>

          <div className="row search-results">
            <ul className="col result-list">
              <ResultItem key={1}/>
              <ResultItem key={2}/>
              <ResultItem key={3}/>
              <ResultItem key={4}/>
            </ul>
          </div>

        </div>
    );
  }
}

export default App;
