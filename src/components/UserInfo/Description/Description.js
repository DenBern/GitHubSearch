import { Component } from "react";
import React from "react";
import GitHubUsers from "../../../services/Users/GitHubUsers";

import './Description.scss'

import followersIcon from '../../../assets/png/followers_icon.png';
import followingIcon from '../../../assets/png/following_icon.png';

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'info',
    }
  }

  render () {
    const {avatar, name, url, followers, following, login} = this.props.userData;
    
    return (
      <section className="user">
        <div
          className="photo"
          style={
            {
              backgroundImage: `url(${avatar})`,
              backgroundSize: "contain",
            }
          }>
        </div>
        <div className="name-link">
          <p className="name">{name}</p>
          <a 
            href={url}
            target="_blank"
            className="link">
            {login}
          </a>
        </div>
        <div className="followers-following">
          <div className="followers">
            <div 
              className="icon"
              style={
                {
                  background: `url(${followersIcon})`,
                  backgroundRepeat: "no-repeat",
                }
              }
            />
            <span>{followers} followers</span>
          </div>
          <div className="following">
            <div 
              className="icon"
              style={
                {
                  background: `url(${followingIcon})`,
                  backgroundRepeat: "no-repeat",
                }
              }
            />
            <span>{following} following</span>
          </div>
        </div>
      </section>
    )
  }
}

export default Description;