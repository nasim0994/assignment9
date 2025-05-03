import { UserRole } from '@prisma/client';

export type IUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  role: UserRole;
  status: string;
  isDeleted: boolean;
  isPremium: boolean;
};
