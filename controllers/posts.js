import Post from "../models/Post.js";
import User from "../models/User.js";   
export const createPost = async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }
    catch (error) {
        res.status(500).json(error);
    }
}

export const updatePost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
        try {
            const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });
            res.status(200).json({
                "status": "success",
                "code": 200,
                "message": "Post has been updated",
                "data": updatedPost
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    else {
        res.status(403).json({
            "status": "error",
            "code": 403,
            "message": "You can only update your post",
            "data": "null"
        })
    }
}

export const deletePost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
        try {
            await post.delete();
            res.status(200).json({
                "status": "success",
                "code": 200,
                "message": "Post has been deleted",
                "data": "null"
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    else {
        res.status(403).json({
            "status": "error",
            "code": 403,
            "message": "You can only delete your post",
            "data": "null"
        })
    }
}

export const likePost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!req.body.userId) {
        res.status(403).json({
            "status": "error",
            "code": 403,
            "message": "You need to be logged in to like a post",
            "data": "null"
        })
    }
    else if (!post.likes.includes(req.body.userId)) {
        try {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json({
                "status": "success",
                "code": 200,
                "message": "The post has been liked",
                "data": "null"
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    else {
        try {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json({
                "status": "success",
                "code": 200,
                "message": "The post has been disliked",
                "data": "null"
            });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
}

export const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }
    catch (error) {
        res.status(500).json(error);
    }
}

export const getTimelinePosts = async (req, res) => {
    try {
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({ userId: friendId });
            })
        );
        res.status(200).json(userPosts.concat(...friendPosts));
    }
    catch (error) {
        res.status(500).json(error);
    }
}

