import express from 'express';
import { loginController, refreshTokenController } from './authController';
import { loginValidation } from './authValidation';
import { verifyValidate } from '../../middlewares/verifyValidate';
const Router = express.Router();

Router.post('/login', verifyValidate(loginValidation), loginController);
Router.post('/refresh-token', refreshTokenController);

export const authRoute = Router;
