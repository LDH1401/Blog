import express from 'express';
import { createPost, getPosts, getPostBySlug, addComment  } from '../controllers/postController.js';

const router = express.Router();

router.post('/', createPost);

router.get('/', getPosts);

router.get('/:slug', getPostBySlug);

router.post('/:slug/comments', addComment);

export default router;