import { z } from 'zod';

export const loginValidation = z.object({
  email: z.string().email({ message: 'Invalid email format' }),
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'Password can not be more than 20 characters' }),
});
