import React from "react";

import './NotFound.scss';

export const NotFound = ({prop}) => {
    return (
      <div className={`${prop}-not-found`}>
        <div className={`${prop}-icon`}/>
        <p className="info-text">
          {prop === 'user' ? 'User not found' : 'Repository list is empty'}
        </p>
      </div>
    )
}