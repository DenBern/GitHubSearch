import React from 'react';
import Search from '../Search/Search';

import './Header.scss';
import githubLogo from '../../assets/png/github_icon.png';

export const Header = () => {
  return (
    <header>
        <div 
          className="logo"
          style={
            {
              background: `url(${githubLogo})`,
            }
          }>
        </div>
        <Search />
      </header>
  )
}