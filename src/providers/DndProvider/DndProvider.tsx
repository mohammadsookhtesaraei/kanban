import type { PropsWithChildren, ReactNode } from 'react';

import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';

// dndContext : تمام کامپوننت‌هایی که قرار است قابلیت کشیدن و رها کردن داشته باشند، باید داخل
// DndContext قرار بگیرند.

type Props = PropsWithChildren;

const DndProvider = ({ children }: Props): ReactNode => {
  //useSensors: در
  // dnd-kit
  //  برای تعریف روش تشخیص
  // Drag
  // کردن
  // توسط کاربر استفاده می‌شود
  const sensors = useSensors(useSensor(PointerSensor));

  // pointerSensor :
  // PointerSensor
  // معمولاً تعاملات
  // Mouse، Touch و Pointer
  // را پوشش می‌دهد

  return <DndContext sensors={sensors}>{children}</DndContext>;
};
export default DndProvider;
