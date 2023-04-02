import React, { useState, useEffect } from "react";
import { User } from "../User/User.jsx";
import { Search } from '../Search/Search.jsx';
// import { NotFound } from "../User/NotFound/NotFound";
import { StartSearch } from "../StartSearch/StartSearch.jsx";

import './App.scss';

export const App = () => {
  const [userName, setUserName] = useState();

  const updateUser = (search) => {
    setUserName(search)
  }

  return (
    <>
      <header>
        <Search updateUser={updateUser}/>
      </header>
      <main>
        {!userName && <StartSearch/>}
        {userName && <User userName={userName}/>}
        {/* {error && <NotFound prop={constants.userNotFound}/>} */}
      </main>
    </>
  )
}