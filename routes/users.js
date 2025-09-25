const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.find({}).populate('blogs');
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id).populate('blogs');
  res.json(user);
});

module.exports = router;
