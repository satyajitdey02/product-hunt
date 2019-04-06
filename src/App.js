import React, {Component} from 'react';
import SearchBar from "./components/SearchBar";
import ResultItem from "./components/ResultItem";
import './App.css';
import ResultList from "./components/ResultList";

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
            <ResultList/>
          </div>

        </div>
    );
  }
}

export default App;
