import React, { useState, useEffect } from "react";
import { User } from "../User/User.jsx";
import { Search } from '../Search/Search.jsx';
import { NotFound } from "../NotFound/NotFound.jsx";
import { StartSearch } from "../StartSearch/StartSearch.jsx";

import { constants } from "../constants/constants.js";

import './App.scss';

export const App = () => {
  const [userName, setUserName] = useState('');

  return (
    <>
      <header>
        <Search updateUser={(search) => setUserName(search)}/>
      </header>
      <main>
        {!userName ? <StartSearch/> : <User userName={userName}/>}
        {/* {descError && <NotFound prop={constants.userNotFound}/>} */}
      </main>
    </>
  )
}