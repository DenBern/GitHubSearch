import React from "react";
import Description from './Description/Description';
import { Repositories } from './Repositories/Repositories';

import './UserInfo.scss';

export const UserInfo = (allInfo) => {
  const {userDesc, repositories} = allInfo.userInfo;
  return (
    <section className="user-info">
      <Description userDesc={userDesc}/>
      <Repositories userRepos={repositories} />
    </section>
  )
};