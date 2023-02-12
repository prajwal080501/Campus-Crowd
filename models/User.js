import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    coverPicture: {
        type: String,
        default: "",
    },
    followers: {
        type: Array,
        default: [],
    },
    followings: {
        type: Array,
        default: [],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    desc: {
        type: String,
        max: 50,
    },
    city: {
        type: String,
        max: 50,
    },
    from : {
        type: String,
        max: 50,
    },
    skills: {
        type: Array,
        default: [],
    },
    degree: {
        type: String,
        max: 50,
    },
    // add a field to add a passing year for the degree
    passingYear: {
        type: Number,
    },
    collegeName: {
        type: String,
        default: "Modern College of Arts, Science and Commerce",
    },
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

export default User;
