import React from "react";
import Description from './Description/Description';
import Repositories from './Repositories/Repositories';

import './UserInfo.scss';

export const UserInfo = (allInfo) => {
  const {userDesc, userRepos} = allInfo.userInfo;
  console.log(allInfo)
  return (
    <section className="user-info">
      <Description userDesc={userDesc}/>
      {/* <Repositories userRepositories={userInfo.repositories} /> */}
    </section>
  )
};