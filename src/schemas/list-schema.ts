import { z } from 'zod';

import { TitleSchema } from '@/schemas/title-schema';

export const listSchema = z.object({
  title: TitleSchema,
});
