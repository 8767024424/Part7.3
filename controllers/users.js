const User = require('../models/user');
const Blog = require('../models/blog');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).populate('blogs');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong while fetching users' });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('blogs');
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong while fetching user' });
  }
};

module.exports = {
  getAllUsers,
  getUserById
};
