import { Component } from "react";
import React from "react";
import Users from "../../../services/Users/Users";

import './Description.scss'

import followersIcon from '../../../assets/png/followers_icon.png';
import followingIcon from '../../../assets/png/following_icon.png';

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      avatar: '',
      name: '',
      url: '',
      login: '',
      followers: '',
      following: '',
    }
  }
    user = new Users ();

    updateUser = () => {
      this.user
        .getUserInfo("denbern")
        .then(res => 
          this.setState({
            avatar: res.avatar_url,
            name: res.name,
            url: res.html_url,
            login: res.login,
            followers: res.followers,
            following: res.following,
          })
        )
    }

  render () {
    const {avatar, name, url, followers, following, login} = this.state;
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
        <div className="name_link">
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
        <button onClick={() => this.updateUser()}
          style={{
            width: "100px",
            height: "50px",
          }}>
          </button>
      </section>
    )
  }
}

export default Description;