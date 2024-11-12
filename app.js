import express from 'express';
import cookieParser from 'cookie-parser';
import { sequelize } from './backend/config/database.js';
import authRoutes from './backend/routes/authRoutes.js';
import blogRoutes from './backend/routes/blogRoutes.js';
import userRoutes from './backend/routes/userRoutes.js';
import visitorRoutes from './backend/routes/visitorRoutes.js';
import blogLikeRoutes from './backend/routes/blogLikeRoutes.js';
import blogViewRoutes from './backend/routes/blogViewRoutes.js';
import { trackVisitor } from './backend/middleware/visitorTracker.js';
import multer from 'multer';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware for parsing request bodies
app.set('trust proxy', true);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

// this really needs to be placed before any routes and the trackvistor middleware
app.use(cookieParser());
//needs to be placed after cookieparser
app.use(trackVisitor);


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
app.use('/blog-likes', blogLikeRoutes);
app.use('/blog-views', blogViewRoutes);
app.use('/visitors', visitorRoutes);
app.use('/users', userRoutes);

// Sync Database and Start Server
sequelize.sync().then(() => {
  app.listen(3000, () => console.log('REST API running on port 3000'));
});
