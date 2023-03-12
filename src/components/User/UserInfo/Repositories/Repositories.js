import React from "react";
import { NotFound } from "../../NotFound/NotFound";
import { Repository } from "./Repository/Repository";

import './Repositories.scss';

export const Repositories = ({userRepositories}) => {
  if (!userRepositories.length) {
    return <NotFound prop='repos'/>
  }

  const element = userRepositories.map(repo => {
      return <Repository key={repo.id} name={repo.name} description={repo.description} html_url={repo.html_url} />
  })

  return (
    <div className="repositories">
      <h1>Repositories ({userRepositories.length})</h1>
      <div className="repositories-list">
        {element}
      </div>
    </div>
  )
};