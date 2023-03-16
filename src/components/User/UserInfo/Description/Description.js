import { Component } from "react";
import React from "react";

import './Description.scss';

import followersIcon from '../../../../assets/png/followers_icon.png';
import followingIcon from '../../../../assets/png/following_icon.png';

const Description = ({userDesc}) => {
    const {avatar, name, login, url, followers, following } = userDesc;
    return (
      <div className="description">
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
          <p className="name">{!name ? 'Name is empty' : name}</p>
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
            <span>{followers}k followers</span>
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
      </div>
    )
  }


export default Description;