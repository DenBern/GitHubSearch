import React from "react";
import Description from './Description/Description';
import {Repositories} from './Repositories/Repositories';

import './UserInfo.scss';

export const UserInfo = ({userInfo}) => {
  return (
    <section className="user-info">
      <Description userInfo={userInfo}/>
      <Repositories userRepositories={userInfo.repositories} />
    </section>
  )
};