import React from "react";
import { NotFound } from "../NotFound/NotFound";
import { Repository } from "./Repository/Repository";

import { constants } from "../../constants/constants"; 

import './Repositories.scss';

export const Repositories = ({userRepos}) => {
  if (!userRepos.length) {
    return <NotFound prop={constants.emptyRepos}/>
  } else {
    const elements = userRepos.map((repo, index) => {
      if (index <= constants.maxRepos) {
        return <Repository key={repo.id} name={repo.name} description={repo.description} html_url={repo.html_url} />
      }
    });

    return (
      <div className="repositories">
        <h1>Repositories ({userRepos.length})</h1>
        <div className="repositories-list">
          {elements}
        </div>
      </div>
    )
  }
}