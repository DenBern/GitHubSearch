import { Component } from "react";
import React from "react";
import { Header } from "../components/Header/Header";
import UserInfo from "../components/UserInfo/UserInfo";

import './App.scss'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    }
  }

  render () {
    return (
      <>
        <Header />
        <UserInfo />
      </>
    )
  }
}

export default App;