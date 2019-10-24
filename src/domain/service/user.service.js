require('dotenv').config();
const userRequest = require('../../infrastructure/service/userRequest');
const getAge = require('../util/getAge');

class User {
  static async getUsers() {
    try {
      const response = await userRequest();
      // Filter by active
      const usersFilter = response.users.filter((user) => user.is_active);
      // Sort by lastname
      const usersSort = usersFilter.sort((a, b) => a.lastname.localeCompare(b.lastname));
      // Add age property
      const users = usersSort.map((user) => ({ ...user, age: getAge(user.birthday) }));
      return users;
    } catch (error) {
      return error;
    }
  }
}

module.exports = User;
