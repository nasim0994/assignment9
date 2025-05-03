import express from 'express';
import { createAdminController, getAllUserController } from './userController';
const Router = express.Router();

Router.get('/all', getAllUserController);
Router.post('/create/admin', createAdminController);

export const userRoute = Router;
