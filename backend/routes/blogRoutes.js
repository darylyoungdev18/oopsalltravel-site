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


router.post('/', upload.fields([{ name: 'blogImage' }, { name: 'videoFile' }]), createBlog);


router.get('/', getAllBlogs);


router.get('/:id', getBlogById);


router.put('/:id', updateBlog);


router.delete('/:id', deleteBlog);

export default router;
