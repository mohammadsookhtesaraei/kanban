import { z } from 'zod';

import { BOARD_COLORS } from '@/types/board';

export const ColorSchema = z.enum(
  BOARD_COLORS,
  'Color must be one of the specified option.'
);
