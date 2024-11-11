import express from 'express';
import { sequelize } from './backend/config/database.js';
import authRoutes from './backend/routes/authRoutes.js';
import blogRoutes from './backend/routes/blogRoutes.js';
import multer from 'multer';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware for parsing request bodies
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

//multer setup for file upload
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, 'public/userAsset/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.origninalname);
    }
});

// API Routes
app.use('/auth', authRoutes);
app.use('/blogs', blogRoutes);

// Sync Database and Start Server
sequelize.sync().then(() => {
  app.listen(3000, () => console.log('REST API running on port 3000'));
});
