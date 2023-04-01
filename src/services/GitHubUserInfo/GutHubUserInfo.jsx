import { useState } from "react";

export const useGitHubUserInfo = () => {
  const URL = "https://api.github.com/users/";
  const reposOnThePage = 4;

  const [userDesc, setUserDesc] = useState({});

  const getData = async (url) => {
    let res = await fetch(url);
    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }
    return await res.json();
  }

  const getUserInfo = (name) => {
    getData(`${URL}${name}`)
      .then(res => {
        setUserDesc({
          avatar: res.avatar_url,
          name: res.name,
          url: res.html_url,
          login: res.login,
          followers: res.followers,
          following: res.following,
          public_repos: res.public_repos,
        })
      })
  }

  // const getRepositories = async (name, page = 1) => {
  //   return  await getData(`${URL}${name}/repos?page=${page}&per_page=${reposOnThePage}`)
  //   .then(res => {

  //   });
  // }

  return {getUserInfo, URL, userDesc}
}