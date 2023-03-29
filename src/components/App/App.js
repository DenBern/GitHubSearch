import React, { Component } from "react";
import { User } from "../User/User";
import Search from "../Search/Search";
import { NotFound } from "../User/NotFound/NotFound";
import { StartSearch } from "../User/StartSearch/StartSearch";
import { Spinner } from "../Spinner/Spinner";

import GitHubUserInfo from "../../services/GitHubUserInfo/GitHubUserInfo";
import { constants } from "../constants/constants";

import './App.scss';

class  App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      search: '',
      error: false,
      loading: false,
    };
  }

  userInfo = new GitHubUserInfo();

  onLoading = () => {
    this.setState({
      loading: !this.state.loading,
    })
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    })
  }

  updateState = (value) => {
    this.setState({
      search: value,
    })
  }

  updateUser = () => {
    this.setState({
      error: false
    })
    this.userInfo
      .getUserInfo(`${this.state.search}`)
      .then(res =>
          this.setState({
            userDesc: {
              avatar: res.avatar_url,
              name: res.name,
              url: res.html_url,
              login: res.login,
              followers: res.followers,
              following: res.following,
              public_repos: res.public_repos,
            },
          }),
        )
      .then(this.onLoading)
      .catch(this.onError)
  }

  componentDidUpdate (newProps, prevProps) {
    const {search} = this.state;
    if (search !== prevProps.search) {
      this.updateUser();
      this.onLoading();
    }
  }

  render () {
    const {search, error, userDesc, loading} = this.state;
    const userInfo = userDesc && !loading && !error;
    
    return (
      <>
        <header>
          <Search updateState={this.updateState} />
        </header>
        <main>
          {!search && <StartSearch/>}
          {loading && <Spinner/>}
          {error && <NotFound prop={constants.userNotFound}/>}
          {userInfo && <User allInfo={this.state}/>}
        </main>
      </>
    )
  }
}

export default App;
