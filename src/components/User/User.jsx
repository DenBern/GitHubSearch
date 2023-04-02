import React, {useState, useEffect} from "react";
import { useGitHubUserInfo } from "../../services/GitHubUserInfo/GutHubUserInfo.jsx";
import { Description } from "./Description/Description.jsx";
import { Repositories } from "./Repositories/Repositories.jsx";
import { NotFound } from "../NotFound/NotFound.jsx";
import { constants } from "../constants/constants.js";
import { Spinner } from "../Spinner/Spinner.jsx";
import "./User.scss";

export const User = (props) => {
  const {userName} = props;

  useEffect(() => {
    getUserDesc(userName)
  }, [props])

  const {descError, descLoading, getUserDesc, desc, repos} = useGitHubUserInfo();                               

  const countRepos = desc.public_repos;

  return (
    <section className="user-info">
      {/* {descError && <NotFound prop={constants.userNotFound}/>} */}
      {descLoading && <Spinner/>}
      {!descLoading && <Description {...desc} loading={descLoading}/>}
      {countRepos 
        ? <Repositories countRepos={countRepos} userName={userName}/>
        : <NotFound prop={constants.emptyRepos}/>
      }
      {/* <Repositories userName={userName} countRepos={countRepos}/> */}
    </section>
  )
}