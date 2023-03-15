import { Component } from "react";
import React from "react";
import GitHubUserInfo from "../../services/GitHubUserInfo/GitHubUserInfo";

import './Search.scss';

import searchLogo from '../../assets/png/search_input_icon.png';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }

  userInfo = new GitHubUserInfo ();

  // onLoading = () => {
  //   this.setState({
  //     loading: true,
  //   })
  // }

  onError = () => {
    this.setState({
      error: true,
    })
  }

  updateUser = () => {
    // this.onLoading();
    this.userInfo
      .getUserInfo(`${this.state.search}`)
      .then(res =>
        this.setState(
          {
            avatar: res.avatar_url,
            name: res.name,
            url: res.html_url,
            login: res.login,
            followers: res.followers > 1000 ? (res.followers / 1000).toFixed(1) : res.followers,
            following: res.following > 1000 ? (res.following / 1000).toFixed(1) : res.following,
          }
        )
      )
      .catch(this.onError)
  }

  updateRepositories = () => {
    this.userInfo
      .getRepositories(`${this.state.search}`)
      .then(repos => 
        this.setState({
          repositories: repos,
        })
      )
      .catch(this.onError)
  }

  handleKeyDownPress = (e) => {
    if (e.key === 'Enter') {
      this.updateUser();
      this.updateRepositories();
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
          onChange={(e) => {this.setState({search: e.target.value})}}
          onKeyDown={this.handleKeyDownPress}
          onKeyUp={() => this.props.updateState(this.state)}>
        </input>
      </div>
      )
  }
}

export default Search;