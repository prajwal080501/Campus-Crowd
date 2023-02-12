import User from "../models/User.js";

export const updateUser = async (req, res) => {
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
        if(req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error);
    }
};