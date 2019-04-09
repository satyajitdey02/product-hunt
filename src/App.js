import React, {Component} from 'react';
import SearchBar from "./components/SearchBar";
import ResultList from "./components/ResultList";

import products from './data/products';

import './App.css';

class App extends Component {

  state = {
    products: [],
    searchTerm: '',
    searchResults: []
  };

  componentDidMount() {
    let formattedProds = [];
    products.forEach(p => {
      let items = App.destructureProduct(p);
      formattedProds.push(items);
    });

    formattedProds.sort((a, b) => b.vote - a.vote);
    this.setState({products: formattedProds, searchResults: formattedProds});
  }

  appCallback = () => {
    let searchResults = this.state.searchResults;
    searchResults.sort((a, b) => b.vote - a.vote);
    this.setState({searchResults: searchResults});
  };

  render() {
    return (
        <div className="container App">
          <header className="row header">
            <h3 className="col">Popular Products</h3>
            <hr/>
          </header>

          <SearchBar onSearchChange={term => this.onSearch(term)}/>

          <div className="row search-results">
            <ResultList searchTerm={this.state.searchTerm}
                        searchResults={this.state.searchResults}
                        appCallback={this.appCallback}/>
          </div>

        </div>
    );
  }

  static destructureProduct(product) {
    const {
      id, title, leadtext, vote,
      image: {src}, credit: {name, photo: {src: photoLink}, link}, url
    } = product;

    let result = {};
    result.id = id;
    result.title = title;
    result.leadtext = leadtext;
    result.vote = vote;
    result.image = src;
    result.creditName = name;
    result.creditPhoto = photoLink;
    result.creditLink = link;
    result.url = url;

    return result;
  }

  onSearch(searchTerm) {
    this.setState({searchTerm: searchTerm.toLowerCase()});
    this.clearSearchResults();

    let resultItems = [];
    if (searchTerm.trim()) {
      console.log('searchTerm: ' + searchTerm);
      this.state.products.forEach(p => {
        if (p.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
          resultItems.push(p);
        }

      });
    } else {
      this.state.products.forEach(p => {
        resultItems.push(p);
      });
    }

    resultItems.sort((a, b) => b.vote - a.vote);
    this.setState({searchResults: resultItems});
  }

  clearSearchResults() {
    this.setState({searchResults: []});
  }
}

export default App;
