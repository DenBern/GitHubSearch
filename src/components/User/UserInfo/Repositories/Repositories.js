import React, { Component } from "react";
import { NotFound } from "../../NotFound/NotFound";
import { Repository } from "./Repository/Repository";

import { constants } from "../../../constants/constants"; 

import './Repositories.scss';

export const Repositories = ({userRepos}) => {
    const basicRepos = [];
    const maxRepos = 3;
    console.log(userRepos)

    if (userRepos.length === 0) {
      return <NotFound prop={constants.emptyRepos}/>
    } else {
      for (let i = 0; maxRepos >= basicRepos.length; i++) {
        basicRepos.push(userRepos[i])
      }

      const element = basicRepos.map(repo => {
        return <Repository key={repo.id} name={repo.name} description={repo.description} html_url={repo.html_url} />
      });
  
      return (
        <div className="repositories">
          <h1>Repositories ({userRepos.length})</h1>
          <div className="repositories-list">
            {element}
          </div>
        </div>
      )
    }
  }