import { z } from 'zod';

import { DescriptionSchema } from '@/schemas/description-schema';
import { TitleSchema } from '@/schemas/title-schema';

export const ListItemSchema = z.object({
  title: TitleSchema,
  description: DescriptionSchema,
  dueDate: z.string(),
});
