import { z } from 'zod';

export const TitleSchema = z
  .string('Title must be string')
  .trim()
  .nonempty('Title can not be empty')
  .min(3, 'Title must be at leatest 3 characters!');
