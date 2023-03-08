import { Component } from "react";
import React from "react";

import './Search.scss';

import searchLogo from '../../assets/png/search_input_icon.png';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }

  onUpdateSearch = (e) => {
    const search = e.target.value;
    this.setState({search: search});
  }

  render () {
    return (
      <div className="search">
        <div 
          className="search-icon"
          style={
            {
              background: `url(${searchLogo})`,
              backgroundRepeat: "no-repeat",
            }
          }>
        </div>
        <input 
          type="text"
          placeholder="Enter GitHub username"
          value={this.state.search}
          onChange={this.onUpdateSearch}>
        </input>
      </div>
      )
  }
}

export default Search;