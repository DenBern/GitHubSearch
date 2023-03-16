import { Component } from "react";
import React from "react";
import { User } from "../User/User";
import Search from "../Search/Search";
import GitHubUserInfo from "../../services/GitHubUserInfo/GitHubUserInfo";

import './App.scss';

import { NotFound } from "../User/NotFound/NotFound";
import { StartSearch } from "../User/StartSearch/StartSearch";

class  App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      search: '',
      loading: false,
      error: false,
    };
  }

  userInfo = new GitHubUserInfo ();

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
        this.setState(
          {
            userDesc: {
              avatar: res.avatar_url,
              name: res.name,
              url: res.html_url,
              login: res.login,
              followers: res.followers > 1000 ? (res.followers / 1000).toFixed(1) : res.followers,
              following: res.following > 1000 ? (res.following / 1000).toFixed(1) : res.following,
            },
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

  componentDidMount () {
    console.log('component did Mount')
  }

  componentDidUpdate (newProps, prevProps) {
    const {search} = this.state;
    if (search !== prevProps.search) {
      this.updateUser();
      this.updateRepositories();
      console.log('component did Update')
    }
  }

  render () {
    const {search, userDesc, repositories} = this.state;
    const start = !search ?  <StartSearch /> : null;
    const userInfo = userDesc ? <User allInfo={this.state}/> : null;
    return (
      <>
        <header>
          <Search updateState={this.updateState} />
        </header>
        <main>
          {start}
          {userInfo}
        </main>
      </>
    )
  }
}

export default App;
