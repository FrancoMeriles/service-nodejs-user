const userService = require('../../domain/service/user.service');

const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
  const users = await userService.getUsers();
  res.status(200).json(users);
};

module.exports = userCtrl;
