import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcrypt"
// Register a user.
export const register = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        user && res.status(400).json({
            "status": "error",
            "code": 400,
            "message": "User already exists",
            "data": "null"
        })
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });
        res.status(200).json(newUser);
    }
    catch (error) {
        res.status(500).json(error);
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            res.status(404).json({
                "status": "error",
                "code": 404,
                "message": "User not found",
                "data": "null"
            })
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            res.status(400).json({
                "status": "error",
                "code": 400,
                "message": "Invalid password",
                "data": "null"
            })
        }
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json(error);
    }

}

