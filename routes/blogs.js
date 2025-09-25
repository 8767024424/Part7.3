const express = require('express');
const { getAllBlogs, createBlog } = require('../controllers/blogs');
const router = express.Router();

// GET all blogs
router.get('/', getAllBlogs);

// POST a new blog
router.post('/', createBlog);

module.exports = router;
