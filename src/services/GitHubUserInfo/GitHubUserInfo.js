const URL = "https://api.github.com/users/";
const reposOnThePage = 4;
class GitHubUserInfo {
  getData = async (url) => {
    let res = await fetch(url);
    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }
    return await res.json();
  }

  getUserInfo = (name) => {
    return  this.getData(`${URL}${name}`);
  }

  getRepositories = (name, page = 1, ) => {
    return this.getData(`${URL}${name}/repos?page=${page}&per_page=${reposOnThePage}`);
  }
}

export default GitHubUserInfo;

