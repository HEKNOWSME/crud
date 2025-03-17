import { Request, Response } from 'express';
import UserModel from '../models/User';
import { isValidObjectId } from 'mongoose';
export const getAllUsers = async (req: Request, res: Response) => {
    try {
       const users = await UserModel.find();
       if (users.length === 0) { 
            res.status(404).json({ message: "No users found" }); 
            return;
       }
        res.json(users);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}
export const createUser = async (req: Request, res: Response) => { 
   try {
      if (!req.body.name || !req.body.email || !req.body.role) { 
         res.status(400).json({ message: "Enter name, email and role" }); 
         return;
      }
      if (!["admin", "user", "guest"].includes(req.body.role)) { 
         res.status(400).json({ message: "Invalid role" }); 
         return;
      }
      if (await UserModel.findOne({ email: req.body.email })) { 
         res.status(400).json({ message: "Email already exists" }); 
         return;
      }
         const user = await new UserModel(req.body).save();
         res.json(user);
      } catch (error: any) {
         res.status(500).json({ message: error.message });
      }
}

export const updateUser = async (req: Request, res: Response) => { 
   try {
      const { id } = req.params;
      if(!isValidObjectId(id)) {
         res.status(400).json({ message: "Invalid user id" });
         return;
      }
      if(!req.body.name && !req.body.email && !req.body.role) {
         res.status(400).json({message: "Enter name, email or role to update"});
         return;
      }
      
      if (req.body.role && !["admin", "user", "guest"].includes(req.body.role)) { 
         res.status(400).json({ message: "Invalid role" }); 
         return;
      }
      const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!user) {
         res.status(404).json({ message: "User not found" });
         return;
      }
      res.json(user);
   } catch (error: any) {
      res.status(500).json({ message: error.message });
   }
}
export const deleteUser = async (req: Request, res: Response) => { 
   try {
      if(!isValidObjectId(req.params.id)) {
         res.status(400).json({ message: "Invalid user id" });
         return;
      }
      const user = await UserModel.findByIdAndDelete(req.params.id);
      if (!user) {
         res.status(404).json({ message: "User not found" });
         return;
      }
      res.json({message: "User deleted"});
   } catch (error: any) {
      res.status(500).json({ message: error.message });
   }
}