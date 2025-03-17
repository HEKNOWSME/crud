import { Router } from "express";
import { createUser, deleteUser, getAllUsers, updateUser } from "../controllers/users.controller";

const userRouter = Router();
userRouter.get("/", getAllUsers);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
export default userRouter;