import express from "express";
import { updateUser } from "../controllers/users.js";

const router = express.Router();

// update user
router.put("/:id", updateUser);
// delete user
// get a user
// follow a user
// unfollow a user


export default router;