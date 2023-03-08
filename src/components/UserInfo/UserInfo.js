import React from "react";
import { Component } from "react";

import { StartSearch } from "./StartSearch/StartSearch";
import { UserNotFound } from "./UserNotFound/UserNotFound";
import Description from "./Description/Description";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }
  render () {
    return (
      <main>
        {/* <StartSearch />
        <UserNotFound /> */}
        <Description />
      </main>
    )
  }
} 

export default UserInfo;