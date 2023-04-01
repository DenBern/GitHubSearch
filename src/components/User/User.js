import React, {useState, useEffect} from "react";
import { useGitHubUserInfo } from "../../services/GitHubUserInfo/GutHubUserInfo.jsx";
import { Description } from "./Description/Description";
// import { Repositories } from "./Repositories/Repositories.jsx";
import { NotFound } from '../NotFound/NotFound';
import { constants } from "../constants/constants.js";
import { Spinner } from "../Spinner/Spinner.js";
import "./User.scss";

export const User = (props) => {
  const {userName} = props;
  const [name, setName] = useState('');

  useEffect(() => {
    setName(props.userName)
  }, [props])

  const {descError, descLoading, getUserDesc, desc, repos} = useGitHubUserInfo();                               

  // useEffect(() => {
  //   setName(props.userName)
  //   console.log('effect')
  // }, [props]);

  const countRepos = desc.public_repos;

  const descOn = !descLoading && !descError;

  return (
    <section className="user-info">
      {descError && <NotFound prop={constants.userNotFound}/>}
      {descOn && <Description {...desc} loading={descLoading}/>}
      {/* {countRepos 
        ? <Repositories countRepos={countRepos} userName={userName}/>
        : <NotFound prop={constants.emptyRepos}/>
      } */}
      {/* <Repositories userName={userName} countRepos={countRepos}/> */}
    </section>
  )
}