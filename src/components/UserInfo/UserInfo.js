import React from "react";
import { Component } from "react";
import { Spinner } from "../Spinner/Spinner";
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
    const {error, loading} = this.props.userInfo;
    
    const startSearch = Object.keys(this.props.userInfo).length <= 1 && !error ? <StartSearch /> : null;
    const userNotFound = error ? <UserNotFound /> : null;
    const description = Object.keys(this.props.userInfo).length > 1 && !error ? <Description userInfo={this.props.userInfo} /> : null;
    const spinner = loading && !error ? <Spinner /> : null;
    return (
      <main>
        {startSearch}
        {spinner}
        {userNotFound}
        {description}
      </main>
    )
  }
} 

export default UserInfo;