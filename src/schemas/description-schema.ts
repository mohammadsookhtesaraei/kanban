import { z } from 'zod';

export const DescriptionSchema = z
  .string('description must be string')
  .trim()
  .max(1000, 'description must be less than 1000 characters!');
