import express from 'express';
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoryController,
  getCategoryByIdController,
  updateCategoryController,
} from './categoryController';
const Router = express.Router();

Router.post('/add', createCategoryController);
Router.get('/all', getAllCategoryController);
Router.get('/:id', getCategoryByIdController);
Router.patch('/update/:id', updateCategoryController);
Router.delete('/delete/:id', deleteCategoryController);

export const categoryRoute = Router;
