import React from "react";
import { Spinner } from "../Spinner/Spinner";
import { Description } from "./Description/Description";
import { Repositories } from "./Repositories/Repositories";

import { constants } from "../constants/constants";

import "./User.scss";

export const User = ({allInfo}) => {
  const {userDesc, repositories} = allInfo;
    // const spinner = loading ? <Spinner /> : null;

    return (
      <section className="user-info">
        <Description userDesc={userDesc}/>
        {/* <Repositories userRepos={repositories}/> */}
      </section>
    )
}