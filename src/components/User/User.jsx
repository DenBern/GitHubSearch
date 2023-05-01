import React, { useEffect } from "react";
import { useGitHubUserInfo } from "../../services/GitHubUserInfo/GitHubUserInfo.js";
import { Description } from "./Description/Description.jsx";
import { Repositories } from "./Repositories/Repositories.jsx";
import { NotFound } from "../NotFound/NotFound.jsx";
import { constants } from "../constants/constants.js";

import "./User.scss";

export const User = ({userName, page, setPage}) => {

  const {descError, descLoading, getUserDesc, desc = {}} = useGitHubUserInfo();
  const countRepos = desc.public_repos;

  useEffect(() => {
    getUserDesc(userName);
  }, [userName]);

  return (
    <section className="user-info">
      { desc && !descError ? 
        ( 
          <>
            <Description {...desc} descLoading={descLoading}/> 
            <Repositories countRepos={countRepos} userName={userName} page={page} setPage={setPage}/>
          </>
        ) 
        : <NotFound prop={constants.userNotFound}/>
      }
    </section>
  )
}