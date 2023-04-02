import React from "react";

import userNotFoundIcon from '../../assets/png/not_found_user_icon.png';
import reposNotFoundIcon from '../../assets/png/not_found_repos_icon.png';

import './NotFound.scss';

export const NotFound = ({prop}) => {
    return (
      <div className={`${prop}-not-found`}>
        <div 
          className={`${prop}-icon`}
          style={
            {
              background: `url(${prop === 'user' ? userNotFoundIcon : reposNotFoundIcon})`,
              backgroundRepeat: "no-repeat",
            }
          } />
        <p className="info-text">
          {prop === 'user' ? 'User not found' : 'Repository list is empty'}
        </p>
      </div>
    )
}