import { log } from "console";
import express, { json } from "express";
import cors from "cors"
import mongoose from "mongoose";
import userRouter from "./routes/user.routes";
const port = process.env.PORT || 3000;
const app = express();
mongoose.connect("mongodb://localhost:27017/mern-crud")
   .then(() => log("Connected to the database"))
   .catch(err => log(err.message));
app.use(json())
app.use(cors({ origin: "http://localhost:5173" }));
app.get("/", (req, res) => {res.send("Welcome to the MERN CRUD API")});
app.use("/users", userRouter);
app.listen(port, () => log(`Listening to the port ${port}`));