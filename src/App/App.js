import { Component } from "react";
import React from "react";
import User from "../components/User/User";
import Search from "../components/Search/Search";

import './App.scss';
import githubLogo from '../assets/png/github_icon.png';

class  App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userInfo: {},
      pages: {
        startSearch: 'start',
        notFoundUser: 'notfound',
        user: 'userInfo',
      },
    };
  }

  updateState = (value) => {
    this.setState({
      userInfo: value,
    })
  }

  render () {
    return (
      <>
        <header>
          <div
            onClick={() => window.location.reload(false)}
            className="logo"
            style={
              {
                background: `url(${githubLogo})`,
              }
            }>
          </div>
          <Search updateState={this.updateState} />
        </header>
          <User userInfo={this.state.userInfo} />
      </>
    )
  }
}

export default App;
