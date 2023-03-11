import React from "react";

import userNotFoundIcon from '../../../assets/png/not_found_user_icon.png';

import './UserNotFound.scss';

export const UserNotFound = ({userName}) => {
  return (
    <div className="user-not-found">
      <div 
        className="icon"
        style={
          {
            background: `url(${userNotFoundIcon})`,
            backgroundRepeat: "no-repeat",
          }
        } />
      <p className="info-text">
        User <b style={{color: "red"}}>{userName}</b> not found
      </p>
    </div>
  )
}