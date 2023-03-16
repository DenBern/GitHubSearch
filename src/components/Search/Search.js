import { Component } from "react";
import React from "react";

import './Search.scss';

import searchLogo from '../../assets/png/search_input_icon.png';
import githubLogo from '../../assets/png/github_icon.png';

class Search extends Component {
    state = {
      search: '',
    }

  handleKeyDownPress = (e) => {
    if (e.key === 'Enter') {
      this.props.updateState(this.state.search)
    }
  }

  render () {
    return (
      <div className="search-wrapper">
        <div
              onClick={() => window.location.reload(false)}
              className="logo"
              style={
                {
                  background: `url(${githubLogo})`,
                }
              }>
        </div>
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
            onChange={(e) => {this.setState({search: e.target.value})}}
            onKeyPress={this.handleKeyDownPress}>
          </input>
        </div>
      </div>
      )
  }
}

export default Search;