import React from "react";
import { Component } from "react";
import { Spinner } from "../Spinner/Spinner";
import { StartSearch } from "./StartSearch/StartSearch";
import { NotFound } from "./NotFound/NotFound";
import { UserInfo } from "./UserInfo/UserInfo";

import { emptyData } from "../constants/constants";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }

  render () {
    const {error, loading} = this.props.userInfo;
    const startSearch = Object.keys(this.props.userInfo).length <= 1 && !error ? <StartSearch /> : null;
    const userNotFound = error ? <NotFound prop={emptyData.userNotFound}/> : null;
    const userInfo = Object.keys(this.props.userInfo).length > 1 && !error ? <UserInfo userInfo={this.props.userInfo} /> : null;
    const spinner = loading ? <Spinner /> : null;

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