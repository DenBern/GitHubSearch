import React from "react";

import searchInfoIcon from '../../../assets/png/search_info_icon.png';
import './StartSearch.scss';

export const StartSearch = () => {
  return (
    <div className="start-search">
      <div 
        className="icon"
        style={
          {
            background: `url(${searchInfoIcon})`,
            backgroundRepeat: "no-repeat",
          }
        } />
      <p className="info-text">
        Start with searching a GitHub user
      </p>
    </div>
  )
} 