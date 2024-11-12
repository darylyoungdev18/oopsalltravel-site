import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/User.js';
import { getUserDetails } from '../controllers/userController.js';

const router = express.Router();


router.post('/register', async (req, res) => {
const { username, password } = req.body;
try {
  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  
  // Create a new user
  const newUser = await User.create({ User_Account_Name: username, password: hashedPassword });
  
  res.status(201).json({ message: 'User registered successfully', user: newUser });
} catch (error) {
  console.error('Error registering user:', error);
  res.status(500).json({ message: 'Database error' });
}
});


router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ where: { User_Account_Name: username } });
      if (user && await bcrypt.compare(password, user.password)) {
        res.status(200).json({ message: 'Login successful', user });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Error logging in user:', error);
      res.status(500).json({ message: 'Database error' });
    }
  });
  

//  get user details along with last 4 blogs and likes
router.get('/userdetails/:userId', getUserDetails);

export default router;