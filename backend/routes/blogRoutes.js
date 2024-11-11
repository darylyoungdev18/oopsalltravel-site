import express from 'express';
import { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog } from '../controllers/blogController.js';
import multer from 'multer';


const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/userAsset/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });

  const upload = multer({ storage: storage });

// Route to create a new blog post with file upload
router.post('/', upload.fields([{ name: 'blogImage' }, { name: 'videoFile' }]), createBlog);

// Route to get all blog posts
router.get('/', getAllBlogs);

// Route to get a single blog post by ID
router.get('/:id', getBlogById);

// Route to update a blog post by ID
router.put('/:id', updateBlog);

// Route to delete a blog post by ID
router.delete('/:id', deleteBlog);

export default router;
