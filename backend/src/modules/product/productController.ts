import AppError from '../../errors/AppError';
import { catchAsync } from '../../utils/catchAsync';
import { deleteFile } from '../../utils/deleteFile';
import { makeSlug } from '../../utils/makeSlug';
import httpStatus from 'http-status';
import {
  createProductService,
  deleteProductService,
  getAllProductService,
  getProductByIdService,
  updateProductService,
} from './productService';

export const createProductController = catchAsync(async (req, res, next) => {
  const image: string | undefined = req?.file?.filename;
  if (!image) throw new AppError(httpStatus.NOT_FOUND, 'image is required !');

  const data = {
    ...req.body,
    thumbnail: `/product/${image}`,
    slug: makeSlug(req?.body?.title),
  };

  try {
    const result = await createProductService(data);

    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (error) {
    if (image) deleteFile(`/product/${image}`);
    next(error);
  }
});

export const getAllProductController = catchAsync(async (req, res) => {
  const result = await getAllProductService();

  res.status(200).json({
    success: true,
    message: 'Products fetched successfully',
    data: result,
  });
});

export const getProductByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getProductByIdService(id);

  res.status(200).json({
    success: true,
    message: 'Product fetched successfully',
    data: result,
  });
});

export const updateProductController = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const image: string | undefined = req?.file?.filename;

  const data = {
    ...req.body,
    thumbnail: image ? `/product/${image}` : undefined,
    slug: makeSlug(req?.body?.title),
  };

  try {
    const result = await updateProductService(id, data);
    if (result) deleteFile(result?.image);

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: result,
    });
  } catch (error) {
    if (image) deleteFile(`/product/${image}`);
    next(error);
  }
});

export const deleteProductController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await deleteProductService(id);
  if (result) deleteFile(result?.image);

  res.status(200).json({
    success: true,
    message: 'Product deleted successfully',
  });
});
