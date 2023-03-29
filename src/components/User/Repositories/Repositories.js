import React from "react";
import { Component } from "react";
import { NotFound } from "../NotFound/NotFound";
import { Repository } from "./Repository/Repository";
import { Pagination } from "./Pagination/Pagination.jsx";
import { Items } from "./Items/Items.jsx";

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

  onLoading = () => {
    this.setState({
      loading: !this.state.loading
    })
  }

  updateRepositories = () => {
    this.onLoading()
    this.userRepos
      .getRepositories(`${this.props.user}`, `${this.state.page}`, constants.reposOnThePage)
      .then(repos => 
        this.setState({
          repositories: repos,
        })
      )
      .then(this.onLoading)
  }

  componentDidMount() {
    this.updateRepositories();
  }

  componentDidUpdate (newProps, prevProps) {
    const {page} = this.state;
    if (page !== prevProps.page) {
      this.updateRepositories();
    }
  }

  render () {
    const {repos} = this.props;
    const {repositories, loading, page} = this.state;

    const reposStart = page * constants.reposOnThePage - constants.reposOnThePage + 1;
    const reposEnd = page * constants.reposOnThePage;

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
          <div className="pages-items">
            <Items 
              repos={repos} 
              reposStart={reposStart} 
              reposEnd={reposEnd}
            />
            <Pagination 
              repos={repos} 
              onPage={this.onPage}
            />
          </div>
        </div>
    )
  }
}

export default Repositories;