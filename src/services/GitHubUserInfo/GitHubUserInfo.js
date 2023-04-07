import { useState } from "react";

export const useGitHubUserInfo = () => {
  const URL = "https://api.github.com/users/";

  const [desc, setDesc] = useState({});
  const [descLoading, setDescLoading] = useState(false);
  const [descError, setDescError] = useState(false);

  const [repos, setRepos] = useState([]);
  const [reposLoading, setReposLoading] = useState(false);
  const [reposError, setReposError] = useState(false);

  const getData = async (url) => {
    let res = await fetch(url);
    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }
    return await res.json();
  }

  const getUserDesc = (name) => {
    setDescError(false);
    setDescLoading(true);
    getData(`${URL}${name}`)
      .then(desc => {
        setDesc({
          avatar: desc.avatar_url,
          name: desc.name,
          url: desc.html_url,
          login: desc.login,
          followers: desc.followers,
          following: desc.following,
          public_repos: desc.public_repos,
        });
        setDescLoading(false);
      })
      .catch(() => {
          setDescError(true);
          setDescLoading(false)
        }
      )
  }

  const getUserRepositories = (name, page = 1, reposOnThePage) => {
    setReposError(false);
    setReposLoading(true);
    getData(`${URL}${name}/repos?page=${page}&per_page=${reposOnThePage}`)
      .then(repos => {
        setRepos([...repos]);
        setReposLoading(false);
      })
      .catch(() => {
          setReposError(true);
          setReposLoading(false)
        }
      )
  }

  return {
    descError, 
    descLoading, 
    getUserDesc, 
    desc,
    reposError, 
    reposLoading, 
    getUserRepositories, 
    repos
  }
}