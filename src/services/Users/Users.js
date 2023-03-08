class Users {
  _url = "https://api.github.com/users/";
  getAllUserInfo = async (url) => {
    let res = await fetch(url);
    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }

    return await res.json();
  }

  getUserInfo = (name) => {
    return  this.getAllUserInfo(`${this._url}${name}`);
  }
}

export default Users;

