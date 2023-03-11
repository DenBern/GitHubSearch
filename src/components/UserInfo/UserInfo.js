import React from "react";
import { Component } from "react";

import { StartSearch } from "./StartSearch/StartSearch";
import { UserNotFound } from "./UserNotFound/UserNotFound";
import Description from "./Description/Description";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    const startSearch = Object.keys(this.props.userInfo).length <= 1 ? <StartSearch /> : null;
    const description = Object.keys(this.props.userInfo).length > 1 && !this.props.userInfo.error ? <Description userInfo={this.props.userInfo} /> : null;
    const error = this.props.userInfo.error ? <UserNotFound userName={this.props.userInfo.search}/> : null;

    return (
      <main>
        {startSearch}
        {error}
        {description}
      </main>
    )
  }
} 

export default UserInfo;