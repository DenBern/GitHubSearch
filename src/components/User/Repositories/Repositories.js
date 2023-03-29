import React from "react";
import { Component } from "react";
import { NotFound } from "../NotFound/NotFound";
import { Repository } from "./Repository/Repository";
import { Pagination } from "../../Pagination/Pagination.jsx";

import GitHubUserInfo from "../../../services/GitHubUserInfo/GitHubUserInfo";

import { constants } from "../../constants/constants"; 

import './Repositories.scss';

class  Repositories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repositories: [],
      page: 1,
      loading: false,
    }
  }

  userRepos = new GitHubUserInfo();

  updateRepositories = () => {
    this.setState({
      loading: true
    })
    this.userRepos
      .getRepositories(`${this.props.user}`, `${this.state.page}`)
      .then(repos => 
        this.setState({
          repositories: [...repos],
        })
      )
  }

  componentDidMount() {
    this.updateRepositories();
    this.setState({loading: false})
  }

  render () {
    const {repos} = this.props;
    const {repositories} = this.state;
    const elements = repositories.map(repo => {
      return <Repository key={repo.id} {...repo}/>
    })
    return (
      !repos ? <NotFound prop={constants.emptyRepos}/> :
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

export default Repositories;