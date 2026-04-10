import Post from '../models/Post.js';

// Create a new post
export const createPost = async (req, res) => {
    try {
        const { title, content, slug } = req.body;
        const newPost = new Post({ title, content, slug });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: 'Error creating post', error });
    }
};

// Get all posts
export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching posts', error });
    }
};

// Get a single post by slug
export const getPostBySlug = async (req, res) => {
    try {
        const { slug } = req.params;
        const post = await Post.findOne({ slug });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching post', error });
    }
};

// Add a comment to a post
export const addComment = async (req, res) => {
    try {
        const { slug } = req.params;
        const { text } = req.body;
        const post = await Post.findOne({ slug });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.comments.push(text);
        await post.save();
        res.status(200).json({ message: 'Comment added', data: text });
    } catch (error) {
        res.status(500).json({ message: 'Error adding comment', error });
    }
};