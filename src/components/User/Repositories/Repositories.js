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

  onPage = (page) => {
    this.setState({
      page: page
    })
  }

  updateRepositories = () => {
    this.setState({
      loading: !this.state.loadingloading
    })
    this.userRepos
      .getRepositories(`${this.props.user}`, `${this.state.page}`, constants.reposOnThePage)
      .then(repos => 
        this.setState({
          repositories: repos,
        })
      )
  }

  componentDidMount() {
    this.updateRepositories();
    this.setState({loading: false})
  }

  componentDidUpdate (newProps, prevProps) {
    const {page} = this.state;
    if (page !== prevProps.page) {
      this.updateRepositories();
      this.setState({loading: false})
    }
  }

  render () {
    const {repos} = this.props;
    const {repositories, loading} = this.state;
    const elements = repositories.map(repo => {
      return <Repository key={repo.id} {...repo}/>
    })
    return (
      !repos ? <NotFound prop={constants.emptyRepos}/> :
        <div className="repositories">
          <>
            <h1>Repositories ({repos})</h1>
            {loading ? <span className="blink"> Loading repositories... </span> : 
            <div className="repositories-list">
              {elements}
            </div>
            }
          </>
          <Pagination repos={repos} onPage={this.onPage}/>
        </div>
    )
  }
}

export default Repositories;