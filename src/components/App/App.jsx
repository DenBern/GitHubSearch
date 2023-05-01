import React, { useState } from "react";
import { User } from "../User/User.jsx";
import { Search } from '../Search/Search.jsx';
import { StartSearch } from "../StartSearch/StartSearch.jsx";

import './App.scss';

export const App = () => {
  const [userName, setUserName] = useState('');
  const [page, setPage] = useState(1);

  return (
    <>
      <header>
        <Search updateUser={(search) => setUserName(search)} updatePage={setPage}/>
      </header>
      <main>
        {!userName ? <StartSearch/> : <User userName={userName} page={page} setPage={setPage}/>}
      </main>
    </>
  )
}