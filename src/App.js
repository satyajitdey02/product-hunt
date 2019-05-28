import React, {Component} from 'react';
import SearchBar from "./components/SearchBar";
import ResultList from "./components/ResultList";

import products from './data/products';

import './App.css';
import Header from "./components/Header";

class App extends Component {

  state = {
    //This property holds all the product from the products.json file.
    //Practically we don't need this extra property but here I have introduced it
    //because I don't want to modify(when we up vote for a given product) the original datasource: products.json,
    //rather I want to do an in-memory modification of the product item after up voting.
    //Sorry for the big comments :-)
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

  onSearchResultsReload = (id) => {
    let searchResults = this.state.searchResults;
    searchResults.forEach(item => {
      if (item.id === id) {
        item.vote++;
      }
    });

    searchResults.sort((a, b) => b.vote - a.vote);
    this.setState({searchResults: searchResults});
  };

  render() {
    return (
        <div className="container App">
          <Header heading='Popular Products'/>

          <SearchBar onSearchChange={term => this.onSearch(term)}/>

          <div className="row search-results">
            <ResultList searchTerm={this.state.searchTerm}
                        searchResults={this.state.searchResults}
                        onSearchResultsReload={this.onSearchResultsReload}/>
          </div>
        </div>
    );
  }

  static destructureProduct(product) {
    const {
      id, title, leadtext, vote,
      image: {src}, credit, url
    } = product;

    let result = {};
    result.id = id;
    result.title = title;
    result.leadtext = leadtext;
    result.vote = vote;
    result.image = src;
    result.credit = credit;
    result.url = url;

    return result;
  }

  onSearch(searchTerm) {
    this.setState({searchTerm: searchTerm.toLowerCase()});
    this.clearSearchResults();

    let resultItems = this.searchByTerm(searchTerm);
    this.setState({searchResults: resultItems});
  }

  /*
  * In this method the searchTerm is searched into the concatenated text of
  * title and leadtext and sorted in descending order of vote before return
  **/
  searchByTerm(searchTerm) {
    let results = [];
    if (searchTerm.trim()) {
      this.state.products.forEach(p => {
        let text = `${p.title} ${p.leadtext}`.toLowerCase();
        if (text.indexOf(searchTerm.toLowerCase()) >= 0) {
          results.push(p);
        }

      });
    } else {
      this.state.products.forEach(p => {
        results.push(p);
      });
    }

    results.sort((a, b) => b.vote - a.vote);
    return results;
  }

  clearSearchResults() {
    this.setState({searchResults: []});
  }
}

export default App;
