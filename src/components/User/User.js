import React from "react";
import { Component } from "react";
import { Spinner } from "../Spinner/Spinner";
import { StartSearch } from "./StartSearch/StartSearch";
import { NotFound } from "./NotFound/NotFound";
import { UserInfo } from "./UserInfo/UserInfo";

class User extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {error, loading} = this.props.userInfo;

    const startSearch = Object.keys(this.props.userInfo).length <= 1 && !error ? <StartSearch /> : null;
    const userNotFound = error ? <NotFound prop="user"/> : null;
    const userInfo = Object.keys(this.props.userInfo).length > 1 && !error ? <UserInfo userInfo={this.props.userInfo} /> : null;
    const spinner = loading && !error ? <Spinner /> : null;

    return (
      <main>
        {startSearch}
        {spinner}
        {userNotFound}
        {userInfo}
      </main>
    )
  }
} 

export default User;