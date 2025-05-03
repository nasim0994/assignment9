import { PrismaClient } from '@prisma/client';
import { IUser } from './userInterface';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const getAllUserService = async () => {
  const result = prisma.user.findMany();
  return result;
};

export const createUserService = async (data: IUser) => {
  const hashedPassword = await bcrypt.hash(data?.password, 10);

  const userData = {
    name: data?.name,
    email: data?.email,
    phone: data?.phone,
    password: hashedPassword,
  };

  const result = await prisma.user.create({
    data: userData,
  });

  return result;
};
