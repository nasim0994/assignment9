import { Router } from 'express';
const router = Router();
import { userRoute } from '../modules/user/userRoute';
import { authRoute } from '../modules/auth/authRoute';
import { categoryRoute } from '../modules/category/categoryRoute';
import { productRoute } from '../modules/product/productRoute';

const moduleRoutes = [
  {
    path: '/user',
    route: userRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/category',
    route: categoryRoute,
  },
  {
    path: '/product',
    route: productRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
