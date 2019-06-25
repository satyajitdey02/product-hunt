import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.searchBox = React.createRef();
    this.state = {
      searchTerm: ''
    };
  }

  componentDidMount() {
    this.searchBox.current.focus();
  }

  render() {
    return (
        <div className="col-md-10 search-bar">
          <input ref={this.searchBox} placeholder="Search Products"
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