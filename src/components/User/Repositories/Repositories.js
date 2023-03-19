import React from "react";
import { NotFound } from "../NotFound/NotFound";
import { Repository } from "./Repository/Repository";
import { Pagination } from "../../Pagination/Pagination.jsx";

import { constants } from "../../constants/constants"; 

import './Repositories.scss';

export const Repositories = ({userRepos}) => {
  const pageCount = Math.ceil(userRepos.length / constants.maxRepos);

  if (!userRepos.length) {
    return <NotFound prop={constants.emptyRepos} />
  } else {
    const elements = userRepos.map((repo, index) => {
      if (index <= constants.maxRepos) {
        return <Repository key={repo.id} {...repo} />
      }
    });

    return (
      <div className="repositories">
      <>
        <h1>Repositories ({userRepos.length})</h1>
        <div className="repositories-list">
          {elements}
        </div>
      </>
      <Pagination pageCount={pageCount}/>
      </div>
    )
  }
}