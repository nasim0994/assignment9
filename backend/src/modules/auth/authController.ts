import config from '../../config';
import { catchAsync } from '../../utils/catchAsync';
import { loginService, refreshTokenService } from './authService';

export const loginController = catchAsync(async (req, res) => {
  const { refreshToken, accessToken } = await loginService(req.body);

  res.cookie('refreshToken', refreshToken, {
    secure: config.NODE_ENV === 'production' ? true : false,
    httpOnly: true,
    sameSite: config.NODE_ENV === 'production' ? 'none' : 'lax',
  });

  res.status(200).json({
    success: true,
    message: 'Login successfully',
    data: {
      accessToken,
    },
  });
});

export const refreshTokenController = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;

  const result = await refreshTokenService(refreshToken);

  res.status(200).json({
    success: true,
    message: 'Token refreshed successfully',
    data: result,
  });
});
