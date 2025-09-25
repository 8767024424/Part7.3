const Blog = require('../models/blog');
const User = require('../models/user');

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).populate('user', { name: 1, username: 1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};

const createBlog = async (req, res) => {
  const { title, author, url, userId } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const newBlog = new Blog({
      title,
      author,
      url,
      likes: 0,
      user: user._id
    });

    const savedBlog = await newBlog.save();

    user.blogs = user.blogs.concat(savedBlog._id);
    await user.save();

    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create blog' });
  }
};

module.exports = {
  getAllBlogs,
  createBlog
};
