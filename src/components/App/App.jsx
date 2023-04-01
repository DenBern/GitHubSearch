import React, { useState, useEffect } from "react";
import { User } from "../User/User";
import { Search } from '../Search/Search.jsx';
import { NotFound } from "../User/NotFound/NotFound";
import { StartSearch } from "../StartSearch/StartSearch.jsx";
import { Spinner } from "../Spinner/Spinner";

import GitHubUserInfo from "../../services/GitHubUserInfo/GitHubUserInfo";
import { constants } from "../constants/constants";

import './App.scss';

const App = () => {
    const [userName,setUserName] = useState('');

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
          {/* {loading && <Spinner/>} */}
          {/* {error && <NotFound prop={constants.userNotFound}/>} */}
          {userName && <User userName={userName}/>}
        </main>
      </>
    )
}

export default App;