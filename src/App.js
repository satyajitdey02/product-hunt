import React, {Component} from 'react';
import SearchBar from "./components/SearchBar";
import ResultList from "./components/ResultList";

import products from './data/products';

import './App.css';

class App extends Component {

  state = {
    products: [],
    searchResults: []
  };

  componentDidMount() {
    products.forEach(p => {
      let items = App.destructureProduct(p);
      this.state.products.push(items);
      this.state.searchResults.push(items);
    });

    this.onSearch('');
  }

  appCallback = () => {
    this.state.searchResults.sort((a, b) => b.vote - a.vote);
    this.setState({searchResults: this.state.searchResults});
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
            <ResultList list={this.state.searchResults}
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
    this.setState({searchResults: []});
    let resultItems = [];
    if (searchTerm.trim()) {
      console.log('searchTerm: ' + searchTerm);
      this.state.products.forEach(p => {
        if (p.title.indexOf(searchTerm) > 0) {
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
}

export default App;
