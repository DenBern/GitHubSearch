import React, { useState } from 'react';

import './Search.scss';

export const Search = (props) => {
  const {updateUser} = props;
  const [search, setSearch] = useState('');

  const handleKeyDownPress = (e) => {
    if (e.key === 'Enter') {
      updateUser(search)
    }
  }
  
  return (
    <div className="base">
      <div
        onClick={() => window.location.reload(false)}
        className="logo"
      />
      <div className="search">
        <div className="search-icon" />
        <input 
          type="text"
          placeholder="Enter GitHub username"
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyPress={handleKeyDownPress}
        />
      </div>
    </div>
  )
}