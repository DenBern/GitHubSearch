import React, {useState} from "react";
import { Description } from "./Description/Description";
import Repositories from "./Repositories/Repositories";
import "./User.scss";

export const User = (props) => {
  const {userName} = props;
  const [error, setError] = useState(false);

    return (
      <section className="user-info">
        {/* <Description userDesc={userName}/>
        <Repositories repos={userDesc.public_repos} user={userDesc.login}/> */}
      </section>
    )
}