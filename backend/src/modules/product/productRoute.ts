import express, { NextFunction, Request, Response } from 'express';
import {
  createProductController,
  deleteProductController,
  getAllProductController,
  getProductByIdController,
  updateProductController,
} from './productController';
import { fileUploader } from '../../utils/fileUploader';
const Router = express.Router();
const upload = fileUploader('product').single('image');

Router.post(
  '/add',
  upload,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = req.body.data && JSON.parse(req.body.data);
    next();
  },
  createProductController,
);
Router.get('/all', getAllProductController);
Router.get('/:id', getProductByIdController);
Router.patch(
  '/update/:id',
  upload,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = req.body.data && JSON.parse(req.body.data);
    next();
  },
  updateProductController,
);
Router.delete('/delete/:id', deleteProductController);

export const productRoute = Router;
