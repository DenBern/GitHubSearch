import React, {useState, useEffect} from "react";
import { NotFound } from "../../NotFound/NotFound.jsx";
import { Repository } from "./Repository/Repository.jsx";
import { useGitHubUserInfo } from "../../../services/GitHubUserInfo/GutHubUserInfo.js";
import ReactPaginate from 'react-paginate';

import { constants } from "../../constants/constants"; 

import './Repositories.scss';
import { Spinner } from "../../Spinner/Spinner.jsx";

export const  Repositories = (props) => {
  const {userName, countRepos} = props;

  const {reposError, reposLoading, getUserRepositories, repos, descLoading} =  useGitHubUserInfo();

  const [page, setPage] = useState(1);

  const onThePage = (page) => {
    setPage(page)
  }

  useEffect(() => {
    getUserRepositories(userName);
  }, [props])

  useEffect(() => {
    getUserRepositories(userName, page);
  }, [page])

  const firstPage = page * constants.reposOnThePage - constants.reposOnThePage + 1;
  const lastPage = page * constants.reposOnThePage;
  const pages = Math.ceil(countRepos / constants.reposOnThePage);

  const element = repos.map(repo => {
    return <Repository key={repo.id} {...repo}/>
  })

    return (
          <div className="repositories">
            {!countRepos 
              ? <NotFound prop={constants.emptyRepos}/> 
              : (
                  <>
                    <h1>Repositories ({countRepos})</h1>
                    {reposLoading && <Spinner/>}
                    {!reposLoading && 
                      <div className="repositories-list">
                        {element}
                      </div>
                    }
                  </>
                )
            }
            <div className="pages">
              <>
                <p className="number-page">
                  {firstPage === countRepos ? null : firstPage + '-'}
                  {lastPage > countRepos ? countRepos : lastPage} of {countRepos} items
                </p>
              </>
              <ReactPaginate
                className="pagination"
                breakLabel="..."
                nextLabel=" >"
                previousLabel="< "
                onPageChange={e => onThePage(e.selected + 1)}
                pageRangeDisplayed={constants.reposOnThePage}
                pageCount={pages}
                renderOnZeroPageCount={null}
              />
            </div>
          </div>
    )
}