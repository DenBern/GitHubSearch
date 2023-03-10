import { Component } from "react";
import React from "react";
import GitHubUsers from "../../services/Users/GitHubUsers";

import './Search.scss';

import searchLogo from '../../assets/png/search_input_icon.png';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      userData: {},
    }
  }

  user = new GitHubUsers ();

  onUpdateSearch = (e) => {
    const search = e.target.value;
    this.setState({search: search});
  }

  updateUser = () => {
    this.user
      .getUserInfo(`${this.state.search}`)
      .then(res =>
        this.setState({
          userData: {
            avatar: res.avatar_url,
            name: res.name,
            url: res.html_url,
            login: res.login,
            followers: res.followers,
            following: res.following,
          }
        })
      )
  }

  handleKeyDownPress = (e) => {
    if (e.key === 'Enter') {
      this.updateUser();
    }
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
          onChange={this.onUpdateSearch}
          onKeyDown={this.handleKeyDownPress}
          onKeyUp={() => this.props.updateState(this.state.userData)}>
        </input>
      </div>
      )
  }
}

export default Search;