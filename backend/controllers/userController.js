import { User } from '../models/User.js';
import { Blog } from '../models/Blog.js';
import { Blog_Like } from '../models/Blog_Like.js';

// register a new user
export const registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = await User.create({ username, password });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Database error' });
  }
};

//  login a user
export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username, password } });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Database error' });
  }
};

//  get user details along with last 4 blogs and likes
export const getUserDetails = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findByPk(userId, {
      include: [
        { model: Blog, limit: 4, order: [['createdAt', 'DESC']] },
        { model: Blog_Like, limit: 4, order: [['Liked_At', 'DESC']] }
      ]
    });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ message: 'Database error' });
  }
};