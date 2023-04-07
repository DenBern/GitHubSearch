import React from "react";
import { Spinner } from "../../Spinner/Spinner.jsx";

import './Description.scss';

import userphoto from "../../../assets/png/not_found_user_icon.png"

export const Description = ({avatar, name, login, url, followers, following, descLoading }) => {
  
  return (
    <div className="description">
      {descLoading ? <Spinner/> : (
        <>
          <div
            className="photo"
            style={{backgroundImage: `url(${!avatar ? userphoto : avatar})`}}
          />
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
              <div className="followers-icon"/>
              <span>{`${followers > 1000 ? (followers / 1000).toFixed(1) + 'k' : followers} followers`}</span>
            </div>
            <div className="following">
              <div className="following-icon"/>
              <span>{`${following > 1000 ? (following / 1000).toFixed(1) + 'k' : following}`} following</span>
            </div>
          </div>
          </>
          )}
    </div>
  )
}