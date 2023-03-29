import React from "react";
import { Description } from "./Description/Description";
import Repositories from "./Repositories/Repositories";
import "./User.scss";

export const User = ({allInfo}) => {
  const {userDesc} = allInfo;
    return (
      <section className="user-info">
        <Description userDesc={userDesc}/>
        <Repositories repos={userDesc.public_repos} user={userDesc.login}/>
      </section>
    )
}