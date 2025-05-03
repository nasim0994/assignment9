import { PrismaClient } from '@prisma/client';
import { ICategory } from './categoryInterface';
import { makeSlug } from '../../utils/makeSlug';

const prisma = new PrismaClient();

export const createCategoryService = async (data: ICategory) => {
  const categoryData = {
    name: data?.name,
    slug: makeSlug(data?.name),
  };

  const result = await prisma.category.create({
    data: categoryData,
  });

  return result;
};

export const getAllCategoryService = async () => {
  const result = prisma.category.findMany();
  return result;
};

export const getCategoryByIdService = async (id: string) => {
  const result = prisma.category.findUnique({ where: { id } });
  return result;
};

export const updateCategoryService = async (id: string, data: ICategory) => {
  const categoryData = {
    name: data?.name,
    slug: makeSlug(data?.name),
  };

  const result = await prisma.category.update({
    where: { id },
    data: categoryData,
  });

  return result;
};

export const deleteCategoryService = async (id: string) => {
  const result = await prisma.category.delete({ where: { id } });
  return result;
};
