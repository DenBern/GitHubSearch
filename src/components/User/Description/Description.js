import React from "react";
import { Spinner } from "../../Spinner/Spinner";

import './Description.scss';

export const Description = (props) => {
    const {avatar, name, login, url, followers, following, loading } = props;
    
    return (
      <div className="description">
        {loading && <Spinner/>}
        <div
          className="photo"
          style={{backgroundImage: `url(${avatar})`}}>
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
            <div className="followers-icon"/>
            <span>{`${followers > 1000 ? (followers / 1000).toFixed(1) + 'k' : followers} followers`}</span>
          </div>
          <div className="following">
            <div className="following-icon"/>
            <span>{`${following > 1000 ? (following / 1000).toFixed(1) + 'k' : following}`} following</span>
          </div>
        </div>
      </div>
    )
}