import { Blog } from '../models/Blog.js';

// Function to create a new blog post
export const createBlog = async (req, res) => {
  const { User_Account_ID, Blog_Title, Blog_IMG_SRC, Blog_City, Blog_Country, Blog_Details, Blog_Video_SRC, Is_Video_Blog, Is_Written_Blog } = req.body;

  try {
    const newBlog = await Blog.create({ User_Account_ID, Blog_Title, Blog_IMG_SRC, Blog_City, Blog_Country, Blog_Details, Blog_Video_SRC, Is_Video_Blog, Is_Written_Blog });
    res.status(201).json(newBlog);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ message: 'Database error' });
  }
};

// Function to get all blog posts
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    res.status(200).json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ message: 'Database error' });
  }
};

// Function to get a single blog post by ID
export const getBlogById = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findByPk(id);
    if (blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({ message: 'Database error' });
  }
};

// Function to update a blog post by ID
export const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { Blog_Title, Blog_IMG_SRC, Blog_City, Blog_Country, Blog_Details, Blog_Video_SRC, Is_Video_Blog, Is_Written_Blog } = req.body;

  try {
    const blog = await Blog.findByPk(id);
    if (blog) {
      await blog.update({ Blog_Title, Blog_IMG_SRC, Blog_City, Blog_Country, Blog_Details, Blog_Video_SRC, Is_Video_Blog, Is_Written_Blog });
      res.status(200).json(blog);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ message: 'Database error' });
  }
};

// Function to delete a blog post by ID
export const deleteBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findByPk(id);
    if (blog) {
      await blog.destroy();
      res.status(200).json({ message: 'Blog deleted successfully' });
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ message: 'Database error' });
  }
};