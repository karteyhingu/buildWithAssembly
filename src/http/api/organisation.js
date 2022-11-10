export default class Organisation {
  static async getOrganisation(organisation) {
    try {
      const res = await fetch(`https://api.github.com/search/users?q=${organisation}+type:org`);
      return res.json();
    } catch (error) {
      throw error;
    }
  }
}
