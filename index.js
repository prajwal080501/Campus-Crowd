import express from 'express';
import dotenv from "dotenv";
import connectDB from './middlewares/db.js';
import morgan from "morgan"
import helmet from "helmet"
import userRoute from "./routes/users.js"
import authRoute from "./routes/auth.js"
import postRoutes from "./routes/posts.js"
import cors from "cors"
dotenv.config();
const app = express();

app.use(express.json());
app.use(morgan("common"));
app.use(helmet());
// cors 
app.use(cors({
    origin: [
        "http://localhost:3000",
        "https://campuscrowd.vercel.app/"
    ]
}
))


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