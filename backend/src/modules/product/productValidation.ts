import { z } from 'zod';

export const productValidation = z.object({
  name: z.string().min(3).max(50, 'Name must be less than 50 characters'),
});
