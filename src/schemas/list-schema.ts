import { z } from 'zod';

import { TitleSchema } from '@/schemas/title-schema';

export const ListSchema = z.object({
  title: TitleSchema,
});
