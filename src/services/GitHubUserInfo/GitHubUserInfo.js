const URL = "https://api.github.com/users/";
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

  getRepositories = (name) => {
    return this.getData(`${URL}${name}/repos?page=1&per_page=4`);
  }
}

export default GitHubUserInfo;

