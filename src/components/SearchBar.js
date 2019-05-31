import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  };

  render() {
    return (
        <div className="col-md-10 search-bar">
            <input placeholder="Search Products"
                   value={this.state.searchTerm}
                   onChange={event => this.onInputChange(event.target.value)}/>
        </div>
    );
  }

  onInputChange(searchTerm) {
    this.setState({
      searchTerm
    });

    this.props.onSearchChange(searchTerm);
  }
}

SearchBar.propTypes = {
  onSearchChange: PropTypes.func
};

export default SearchBar;