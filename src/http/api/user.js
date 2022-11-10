export default class User {
  static async getUser(user) {
    try {
      return await fetch(`https://api.github.com/search/users?q=${user}`).then(response => response.json())
    } catch (error) {
      throw error;
    }
  }
}

