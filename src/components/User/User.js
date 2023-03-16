import React from "react";
import { Component } from "react";
import { Spinner } from "../Spinner/Spinner";
import { NotFound } from "./NotFound/NotFound";
import { UserInfo } from "./UserInfo/UserInfo";

import { constants } from "../constants/constants";

export const User = ({allInfo}) => {
    const {error, loading} = allInfo;
    const userNotFound = error ? <NotFound prop={constants.userNotFound}/> : null;
    const userInfo = !error && !loading ? <UserInfo userInfo={allInfo} /> : null;
    // const spinner = loading ? <Spinner /> : null;

    return (
      <>
        {userNotFound}
        {userInfo}
      </>
    )
}