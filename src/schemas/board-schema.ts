import { z } from 'zod';

import { ColorSchema } from '@/schemas/color-schema';
import { DescriptionSchema } from '@/schemas/description-schema';
import { TitleSchema } from '@/schemas/title-schema';

export const BoardSchema = z.object({
  title: TitleSchema,
  description: DescriptionSchema,
  color: ColorSchema,
});
