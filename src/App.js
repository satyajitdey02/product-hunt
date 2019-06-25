import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import products from './data/products';

import './App.css';
import NavigationBar from "./components/NavigationBar";
import SearchResult from "./components/SearchResult";
import LoginProvider from './components/providers/LoginProvider';

class App extends Component {

  state = {
    //This property holds all the product from the products.json file.
    //Practically we don't need this extra property but here I have introduced it
    //because I don't want to modify(when we up vote for a given product) the original datasource: products.json,
    //rather I want to do an in-memory modification of the product item after up voting.
    //Sorry for the big comments :-)
    products: [],
    searchTerm: '',
    searchResults: [],
    userObj: {userName: 'satyajit'},
    userObj: null,
    loginModal: false,
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

  showLoginModal = () => {
    this.setState({
      loginModal: true,
    })
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
        <LoginProvider userObj={this.state.userObj}>
          {/*<LoginModalProvider onClick={this.showLoginModal}>*/}
          <div className="container App">
            <NavigationBar onSearch={term=> this.onSearch(term)}/>

            <SearchResult searchTerm={this.state.searchTerm}
                        searchResults={this.state.searchResults}
                        onSearchResultsReload={this.onSearchResultsReload}/>
          </div>
          {/*<Modal>*/}
            {/*<Child/>*/}
          {/*</Modal>*/}
          {/*</LoginModalProvider>*/}
        </LoginProvider>
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
  * In this method the searchTerm is searched into
  * title and sorted in descending order of vote before return
  **/
  searchByTerm(searchTerm) {
    let results = [];
    if (searchTerm.trim()) {
      this.state.products.forEach(p => {
        let text = `${p.title}`.toLowerCase();
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


// const modalRoot = document.getElementById('modal-root');
//
// class Modal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.el = document.createElement('div');
//   }
//
//   componentDidMount() {
//     // The portal element is inserted in the DOM tree after
//     // the Modal's children are mounted, meaning that children
//     // will be mounted on a detached DOM node. If a child
//     // component requires to be attached to the DOM tree
//     // immediately when mounted, for example to measure a
//     // DOM node, or uses 'autoFocus' in a descendant, add
//     // state to Modal and only render the children when Modal
//     // is inserted in the DOM tree.
//     modalRoot.appendChild(this.el);
//   }
//
//   componentWillUnmount() {
//     modalRoot.removeChild(this.el);
//   }
//
//   render() {
//     return ReactDOM.createPortal(
//         this.props.children,
//         this.el,
//     );
//   }
// }
//
//
// function Child() {
//   // The click event on this button will bubble up to parent,
//   // because there is no 'onClick' attribute defined
//   return (
//       <div className="modal">
//         <button>Click to modal</button>
//       </div>
//   );
// }
