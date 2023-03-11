import React from "react";
import { Component } from "react";

import { StartSearch } from "./StartSearch/StartSearch";
import { UserNotFound } from "./UserNotFound/UserNotFound";
import Description from "./Description/Description";

class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const startSearch = Object.keys(this.props.userInfo).length <= 1 ? <StartSearch /> : null;
    const description = Object.keys(this.props.userInfo).length > 1 ? <Description userInfo={this.props.userInfo} /> : null;

    return (
      <main>
        {startSearch}
        {description}
      </main>
    )
  }
} 

export default UserInfo;