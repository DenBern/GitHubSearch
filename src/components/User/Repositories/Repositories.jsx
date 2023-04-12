import React, {useState, useEffect} from "react";
import ReactPaginate from 'react-paginate';
import { NotFound } from "../../NotFound/NotFound.jsx";
import { Repository } from "./Repository/Repository.jsx";
import { constants } from "../../constants/constants.js";
import { useGitHubUserInfo } from "../../../services/GitHubUserInfo/GitHubUserInfo.js";

import './Repositories.scss';
import { Spinner } from "../../Spinner/Spinner.jsx";

export const  Repositories = ({userName, countRepos}) => {

  const {reposError, reposLoading, getUserRepositories, repos} =  useGitHubUserInfo();

  const [page, setPage] = useState(1);

  const reposOnThePage = 4;
  const firstPage = page * reposOnThePage - reposOnThePage + 1;
  const lastPage = page * reposOnThePage;
  const pages = Math.ceil(countRepos / reposOnThePage);

  useEffect(() => {
    getUserRepositories(userName, page, reposOnThePage);
    
  }, [userName, page])
  
    return (
          <div className="repositories">
          {reposError && 'Error loading repos...'}
          {countRepos ?
              <>
                <h2>Repositories ({countRepos})</h2>
                {reposLoading 
                  ? <Spinner/> 
                  : (
                      <div className="repositories-list">
                        {repos.map(repo => <Repository key={repo.id} {...repo}/>)}
                      </div>
                    )
                }
                <div className="pages">
                  <p className="number-page">
                    {firstPage === countRepos ? null : firstPage + '-'}
                    {lastPage > countRepos ? countRepos : lastPage} of {countRepos} items
                  </p>
                  <ReactPaginate
                    className="pagination"
                    breakLabel="..."
                    nextLabel=" >"
                    previousLabel="< "
                    onPageChange={e => setPage(e.selected + 1)}
                    pageRangeDisplayed={reposOnThePage}
                    pageCount={pages}
                    renderOnZeroPageCount={null}
                  />
                </div>
              </>
            : <NotFound prop={constants.emptyRepos}/>
          }
          {}
          </div>
    )
}