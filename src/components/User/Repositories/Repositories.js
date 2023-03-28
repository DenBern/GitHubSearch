import React from "react";
import { NotFound } from "../NotFound/NotFound";
import { Repository } from "./Repository/Repository";
import { Pagination } from "../../Pagination/Pagination.jsx";

import { constants } from "../../constants/constants"; 

import './Repositories.scss';

export const Repositories = (props) => {
  const{userRepos, repos} = props;

  if (!repos) {
    return <NotFound prop={constants.emptyRepos} />
  } else {
    const elements = userRepos.map((repo) => {
        return <Repository key={repo.id} {...repo} />
      }
    );

    return (
      <div className="repositories">
        <>
          <h1>Repositories ({repos})</h1>
          <div className="repositories-list">
            {elements}
          </div>
        </>
        <Pagination/>
      </div>
    )
  }
}