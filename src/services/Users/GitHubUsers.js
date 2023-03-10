const USERS_URL = "https://api.github.com/users/";

class GitHubUsers {
  getData = async (url) => {
    let res = await fetch(url);
    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }

    return await res.json();
  }

  getUserInfo = (name) => {
    return  this.getData(`${USERS_URL}${name}`);
  }
}

export default GitHubUsers;

