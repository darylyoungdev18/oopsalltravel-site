import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('oopsalltravel', 'root', 'your_password', {
  host: 'localhost',
  dialect: 'mysql'
});

// backend/routes/authRoutes.js
import express from 'express';
import { signupUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signupUser);

export default router;