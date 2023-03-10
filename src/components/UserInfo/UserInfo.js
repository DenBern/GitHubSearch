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
    const startSearch = this.state.search.length === 0 ? <StartSearch /> : null;
    
    return (
      <main>
        {startSearch}
      </main>
    )
  }
} 

export default UserInfo;