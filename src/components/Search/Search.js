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
    }
  }

  user = new GitHubUsers ();

  onUpdateSearch = (e) => {
    const search = e.target.value;
    this.setState({search: search});
  }

  onError = () => {
    this.setState({
        error: true,
    })
}

  updateUser = () => {
    this.user
      .getUserInfo(`${this.state.search}`)
      .then(res =>
        this.setState({
            avatar: res.avatar_url,
            name: res.name,
            url: res.html_url,
            login: res.login,
            followers: res.followers,
            following: res.following,
        })
      )
      .catch(this.onError)
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
          onKeyUp={() => this.props.updateState(this.state)}>
        </input>
      </div>
      )
  }
}

export default Search;