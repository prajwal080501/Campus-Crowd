import User from "../models/User.js";

export const updateUser = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        const user = User.findById(req.params.id).select("-_");
        if (!user) {
            res.status(404).json({
                "status": "error",
                "code": 404,
                "message": "User not found",
                "data": "null"
            })
        }
        try {
            if (req.body.password) {
                req.body.password = await bcrypt.hash(req.body.password, 10);
            }
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    else {
        res.status(403).json({
            "status": "error",
            "code": 403,
            "message": "You can only update your account",
            "data": "null"
        })
    }
};

export const deleteUser = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        const user = await User.findById(req.params.id).select("-_");
        if (!user) {
            res.status(404).json({
                "status": "error",
                "code": 404,
                "message": "User not found",
                "data": "null"
            })
        }
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json({
                "status": "success",
                "code": 200,
                "message": "User deleted successfully",
                "data": user
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }
    else {
        res.status(403).json({
            "status": "error",
            "code": 403,
            "message": "You can only delete your account",
            "data": "null"
        })
    }
};

export const getUser = async (req, res) => {
    const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const followUser = async (req, res) => {
    if (req.body.userId === req.params.id) {
        res.status(403).json({
            "status": "error",
            "code": 403,
            "message": "You can't follow yourself",
            "data": "null"
        })
    }
    else {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } });
                await currentUser.updateOne({ $push: { followings: req.params.id } });
                res.status(200).json({
                    "status": "success",
                    "code": 200,
                    "message": "User has been followed",
                    "data": "null"
                });
            }
            else {
                res.status(403).json({
                    "status": "error",
                    "code": 403,
                    "message": "You already follow this user",
                    "data": "null"
                })
            }
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
}

export const unFollowUser = async (req, res) => {
    if (req.body.userId === req.params.id) {
        res.status(403).json({
            "status": "error",
            "code": 403,
            "message": "You can't follow yourself",
            "data": "null"
        })
    }
    else {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } });
                await currentUser.updateOne({ $pull: { followings: req.params.id } });
                res.status(200).json({
                    "status": "success",
                    "code": 200,
                    "message": "User has been unflollowed",
                    "data": "null"
                });
            }
            else {
                res.status(403).json({
                    "status": "error",
                    "code": 403,
                    "message": "You don't follow this user",
                    "data": "null"
                })
            }
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
}
