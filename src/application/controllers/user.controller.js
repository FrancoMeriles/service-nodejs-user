const userService = require('../../domain/service/user.service');

const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: true, code: 500, message: 'Get all users fail' });
  }
};

module.exports = userCtrl;
