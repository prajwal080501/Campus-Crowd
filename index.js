import express from 'express';
import dotenv from "dotenv";
import connectDB from './middlewares/db.js';
import morgan from "morgan"
import helmet from "helmet"
import userRoute from "./routes/users.js"
import authRoute from "./routes/auth.js"
import postRoutes from "./routes/posts.js"
import cors from "cors"
import multer from "multer"
dotenv.config();
const app = express();

app.use("/images", express.static("public/images"));

app.use(express.json());
app.use(morgan("common"));
app.use(helmet());
app.use(cors());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    }
})

const upload = multer({storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json("File uploaded successfully");
    } catch (error) {
        console.log(error);
    }
})


app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoutes)

const server = app.listen(process.env.PORT, () => {
    try {
        connectDB();
        console.log(`Server is running on port ${process.env.PORT}`);
    } catch (error) {
        console.log(error);
    }
})