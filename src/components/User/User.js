import React, {useState, useEffect} from "react";
import { useGitHubUserInfo } from "../../services/GitHubUserInfo/GutHubUserInfo.jsx";
import { Description } from "./Description/Description";
import Repositories from "./Repositories/Repositories";
import "./User.scss";

export const User = (props) => {
  const {userName} = props;
  const [user, setUser] = useState(userName);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const {getUserInfo, URL, userDesc} = useGitHubUserInfo();

  useEffect(() => {
    getUserInfo(userName)
  }, [userName]);

  console.log(userDesc)

    return (
      <section className="user-info">
        <Description userDesc={userDesc}/>
        {/* <Repositories repos={userDesc.public_repos} user={userDesc.login}/>  */}
      </section>
    )
}