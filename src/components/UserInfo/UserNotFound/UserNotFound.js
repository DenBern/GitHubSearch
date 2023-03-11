import React, { Component } from "react";

import userNotFoundIcon from '../../../assets/png/not_found_user_icon.png';

import './UserNotFound.scss';

export const UserNotFound = () => {
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
          User not found
        </p>
      </div>
    )
}