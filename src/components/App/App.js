import { Component } from "react";
import React from "react";
import { User } from "../User/User";
import Search from "../Search/Search";
import GitHubUserInfo from "../../services/GitHubUserInfo/GitHubUserInfo";
import { constants } from "../constants/constants";

import './App.scss';

import { NotFound } from "../User/NotFound/NotFound";
import { StartSearch } from "../User/StartSearch/StartSearch";
import { Spinner } from "../Spinner/Spinner";

class  App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      search: '',
      error: null,
    };
  }

  userInfo = new GitHubUserInfo ();

  onLoading = () => {
    this.setState({
      loading: true,
    })
  }

  updateState = (value) => {
    this.setState({
      search: value,
    })
  }

  onError = () => {
    this.setState({
      error: true,
    })
  }

  updateUser = () => {
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
            },
          }),
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

  componentDidMount () {
    this.setState({
      loading: false,
    })
    console.log('component did Mount')
  }

  componentDidUpdate (newProps, prevProps) {
    const {search} = this.state;
    if (search !== prevProps.search) {
      this.updateUser();
      // this.updateRepositories();
      console.log('component did Update')
    }
  }

  render () {
    const {search, error, userDesc, loading} = this.state;
    const start = !search ?  <StartSearch /> : null;
    const loadingInfo = loading ? <Spinner /> : null;
    const userNotFound = error ? <NotFound prop={constants.userNotFound} /> : null;
    const userInfo = userDesc && !loading ? <User allInfo={this.state}/> : null;

    return (
      <>
        <header>
          <Search updateState={this.updateState} />
        </header>
        <main>
          {start}
          {loadingInfo}
          {userNotFound}
          {userInfo}
        </main>
      </>
    )
  }
}

export default App;
