import { catchAsync } from '../../utils/catchAsync';
import { createUserService, getAllUserService } from './userService';

export const getAllUserController = catchAsync(async (req, res) => {
  const result = await getAllUserService();

  res.status(200).json({
    success: true,
    message: 'all user get successfully',
    data: result,
  });
});

export const createUserController = catchAsync(async (req, res) => {
  const result = await createUserService(req.body);

  res.status(200).json({
    success: true,
    message: 'User add successfully',
    data: result,
  });
});
