import React, { Component } from "react";
import { NotFound } from "../../NotFound/NotFound";
import { Repository } from "./Repository/Repository";

import './Repositories.scss';

class Repositories extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {userRepositories} = this.props;
    const basicRepos = [];
    const maxRepos = 3;

    if (userRepositories.length === 0) {
      return <NotFound prop='repos'/>
    } else {
      for (let i = 0; maxRepos >= basicRepos.length; i++) {
        basicRepos.push(userRepositories[i])
      }

      const element = basicRepos.map(repo => {
        return <Repository key={repo.id} name={repo.name} description={repo.description} html_url={repo.html_url} />
      });
  
      return (
        <div className="repositories">
          <h1>Repositories ({userRepositories.length})</h1>
          <div className="repositories-list">
          {element}
          </div>
        </div>
      )
    }
  }
}

export default Repositories;
