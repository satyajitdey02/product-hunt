import React, {Component} from 'react';
import SearchBar from "./components/SearchBar";
import ResultList from "./components/ResultList";

import products from './data/products';

import './App.css';

class App extends Component {

  state = {
    products: []
  };

  componentDidMount() {
    this.onSearch('');
  }

  appCallback = () => {
    this.state.products.sort((a, b) => b.vote - a.vote);
    this.setState({products: this.state.products});
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
            <ResultList list={this.state.products}
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
    this.setState({products: []});
    let resultItems = [];
    if (searchTerm.trim()) {
      console.log('searchTerm: ' + searchTerm);
      products.forEach(p => {
        if (p.title.indexOf(searchTerm) > 0) {
          resultItems.push(App.destructureProduct(p));
        }

      });
    } else {
      products.forEach(p => {
        resultItems.push(App.destructureProduct(p));
      });
    }

    resultItems.sort((a, b) => b.vote - a.vote);
    this.setState({products: resultItems});
  }
}

export default App;
