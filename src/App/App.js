import { Component } from "react";
import React from "react";
import UserInfo from "../components/UserInfo/UserInfo";
import Search from "../components/Search/Search";

import './App.scss';
import githubLogo from '../assets/png/github_icon.png';

class  App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      search: '',
      userData: {},
    }
  }

  updateState = (value) => {
    this.setState({
      userData: value,
    })
  }

  render () {
    return (
      <>
        <header>
          <div 
            className="logo"
            style={
              {
                background: `url(${githubLogo})`,
              }
            }>
          </div>
          <Search updateState={this.updateState}/>
        </header>
        <main>
          <UserInfo userData={this.state.userData}/>
        </main>
      </>
    )
  }
}

export default App;
