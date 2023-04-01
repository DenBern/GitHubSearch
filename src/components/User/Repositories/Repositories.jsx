import React, {useState, useEffect} from "react";
import { NotFound } from "../NotFound/NotFound";
import { Repository } from "./Repository/Repository";
import { Pagination } from "./Pagination/Pagination.jsx";
import { Items } from "./Items/Items.jsx";
import { useGitHubUserInfo } from "../../../services/GitHubUserInfo/GutHubUserInfo.jsx";

import { constants } from "../../constants/constants"; 

import './Repositories.scss';
import { Spinner } from "../../Spinner/Spinner";

export const  Repositories = (props) => {
  const {userName, countRepos} = props;
  const {reposError, reposLoading, getUserRepositories, repos} =  useGitHubUserInfo();
  const [page, setPage] = useState(1);
  

  const onPage = (page) => {
    setPage(page)
  }

  useEffect(() => {
    getUserRepositories(userName);
  }, [props])

  const firstPage = page * constants.reposOnThePage - constants.reposOnThePage + 1;
  const lastPage = page * constants.reposOnThePage;

  const element = repos.map(repo => {
    return <Repository key={repo.id} {...repo}/>
  })

    return (
      <div className="repositories">
        {reposLoading && <Spinner/>}
        {!repos 
          ? <NotFound prop={constants.emptyRepos}/> 
          :
            <>
              <>
                <h1>Repositories ({countRepos})</h1>
                  <div className="repositories-list">
                    {/* {element} */}
                  </div>
              </>
              <div className="pages-items">
                <Items 
                  repos={repos} 
                  reposStart={firstPage} 
                  reposEnd={lastPage}
                />
                <Pagination 
                  repos={repos} 
                  onPage={onPage}
                />
              </div>
            </>
        }
      </div>
    )
}