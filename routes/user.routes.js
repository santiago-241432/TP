import express from 'express';
import { getAllUsers, getUserById, createUser, updateUser } from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.get('/', getAllUsers);

userRouter.get('/:id', getUserById);

userRouter.post('/', createUser);

userRouter.put('/:id', updateUser);

export default userRouter;