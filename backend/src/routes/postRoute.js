import express from 'express';
import { createPost, getPosts, getPostBySlug, addComment  } from '../controllers/postController.js';

const router = express.Router();

router.post('/', createPost); // Tạo bài viết mới

router.get('/', getPosts); // Lấy tất cả bài viết

router.get('/:slug', getPostBySlug); // Lấy bài viết theo slug

router.post('/:slug/comments', addComment); // Thêm bình luận vào bài viết theo slug

export default router;