import { catchAsync } from '../../utils/catchAsync';
import {
  createCategoryService,
  deleteCategoryService,
  getAllCategoryService,
  getCategoryByIdService,
  updateCategoryService,
} from './categoryService';

export const createCategoryController = catchAsync(async (req, res) => {
  const result = await createCategoryService(req.body);

  res.status(200).json({
    success: true,
    message: 'Category add successfully',
    data: result,
  });
});

export const getAllCategoryController = catchAsync(async (req, res) => {
  const result = await getAllCategoryService();

  res.status(200).json({
    success: true,
    message: 'all category get successfully',
    data: result,
  });
});

export const getCategoryByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getCategoryByIdService(id);

  res.status(200).json({
    success: true,
    message: 'category get successfully',
    data: result,
  });
});

export const updateCategoryController = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await updateCategoryService(id, req.body);

  res.status(200).json({
    success: true,
    message: 'category update successfully',
    data: result,
  });
});

export const deleteCategoryController = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await deleteCategoryService(id);

  res.status(200).json({
    success: true,
    message: 'category delete successfully',
    data: result,
  });
});
