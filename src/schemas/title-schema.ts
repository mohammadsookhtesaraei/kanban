import { z } from 'zod';

export const TitleSchema = z
  .string({ error: 'Title must be a string' })
  .trim()
  .min(3, { error: 'Title must be at least 3 characters' });
