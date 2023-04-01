import React, { useState, useEffect } from "react";
import { User } from "../User/User";
import { Search } from '../Search/Search.jsx';
// import { NotFound } from "../User/NotFound/NotFound";
import { StartSearch } from "../StartSearch/StartSearch.jsx";

import './App.scss';

export const App = () => {
  const [start, setStart] = useState(true)
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
        {start ? <StartSearch/> : <User userName={userName}/>}
        {/* {loading && <Spinner/>} */}
        {/* {error && <NotFound prop={constants.userNotFound}/>} */}
      </main>
    </>
  )
}