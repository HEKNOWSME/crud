import { model, Schema } from "mongoose";

export interface UserInterface {
   name: string;
   email: string;
   role: "admin" | "user" | "guest"
}
const userSchema = new Schema<UserInterface>({
   name: { type: String, required: true },
   email: { type: String, required: true },
   role: { type: String, required: true, enum: ["admin", "user", "guest"] }
}, { timestamps: true });
const UserModel = model("User", userSchema);
export default UserModel     