import express from "express";
import { createPost, deletePost, getPost, getTimelinePosts, likePost, updatePost } from "../controllers/posts.js";
const router = express.Router();

// create a post
router.post("/", createPost)
// update a post
router.put("/:id", updatePost)
// delete a post
router.delete("/:id", deletePost)
// like a post
router.put("/:id/like", likePost)
// get a post
router.get("/:id", getPost)
// get timeline posts
router.get("/timeline/all/:userId", getTimelinePosts)

export default router;