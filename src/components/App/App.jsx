import React, { useState, useEffect } from "react";
import { User } from "../User/User";
import { Search } from "../Search/Search.jsx";
import { NotFound } from "../User/NotFound/NotFound";
import { StartSearch } from "../User/StartSearch/StartSearch";
import { Spinner } from "../Spinner/Spinner";

import GitHubUserInfo from "../../services/GitHubUserInfo/GitHubUserInfo";
import { constants } from "../constants/constants";

import './App.scss';

const App = () => {
    const [userName,setUserName] = useState('');

    const updateUser = (value) => {
        setUserName(value)
    }

//   onLoading = () => {
//     this.setState({
//       loading: !this.state.loading,
//     })
//   }

//   onError = () => {
//     this.setState({
//       error: true,
//       loading: false,
//     })
//   }

//   const updateSearch = (value) => {
//     setSearch(value)
//   }

//   updateUser = () => {
//     this.setState({
//       error: false
//     })
//     this.userInfo
//       .getUserInfo(`${this.state.search}`)
//       .then(res =>
//           this.setState({
//             userDesc: {
//               avatar: res.avatar_url,
//               name: res.name,
//               url: res.html_url,
//               login: res.login,
//               followers: res.followers,
//               following: res.following,
//               public_repos: res.public_repos,
//             },
//           }),
//         )
//       .then(this.onLoading)
//       .catch(this.onError)
//   }

//     const userInfo = userDesc && !loading && !error;
    
    return (
      <>
        <header>
          <Search updateUser={updateUser}/>
        </header>
        <main>
          {!userName && <StartSearch/>}
          {/* {loading && <Spinner/>} */}
          {/* {error && <NotFound prop={constants.userNotFound}/>} */}
          {/* {userInfo && <User allInfo={search}/>} */}
        </main>
      </>
    )
}

export default App;