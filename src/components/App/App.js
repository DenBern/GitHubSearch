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
      loading: false,
    };
  }

  userInfo = new GitHubUserInfo ();

  // onLoading = () => {
  //   this.setState({
  //     loading: true,
  //   })
  // }

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
            loading: false,
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
  }

  componentDidUpdate (newProps, prevProps) {
    const {search, loading} = this.state;
    if (search !== prevProps.search) {
      this.updateUser();
      this.updateRepositories();
      this.setState({
        loading: true,
        error: false,
      })
    }
  }

  render () {
    const {search, error, userDesc, loading, repositories} = this.state;
    const userInfo = userDesc && repositories && !loading;

    return (
      <>
        <header>
          <Search updateState={this.updateState} />
        </header>
        <main>
          {!search && <StartSearch />}
          {loading && !error && <Spinner />}
          {error && <NotFound prop={constants.userNotFound} />}
          {userInfo && <User allInfo={this.state}/> }
        </main>
      </>
    )
  }
}

export default App;
