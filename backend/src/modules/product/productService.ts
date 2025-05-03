import { PrismaClient } from '@prisma/client';
import { IProduct } from './productInterface';

const prisma = new PrismaClient();

export const createProductService = async (data: IProduct) => {
  const result = await prisma.product.create({ data });
  return result;
};

export const getAllProductService = async () => {
  const result = prisma.product.findMany();
  return result;
};

export const getProductByIdService = async (id: string) => {
  const result = prisma.product.findUnique({ where: { id } });
  return result;
};

export const getProductBySlugService = async (slug: string) => {
  const result = prisma.product.findUnique({ where: { slug } });
  return result;
};

export const updateProductService = async (id: string, data: IProduct) => {
  const result = await prisma.product.update({
    where: { id },
    data: data,
  });

  return result;
};

export const deleteProductService = async (id: string) => {
  const result = await prisma.product.delete({ where: { id } });
  return result;
};
