import { User } from '../models/User.js';

export const signupUser = async (req, res) => {
  const { username, email, password, phone } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    await User.create({ username, email, password });
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error inserting user:', error);
    res.status(500).json({ message: 'Database error' });
  }
};
