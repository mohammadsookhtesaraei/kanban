import { type PropsWithChildren, type ReactNode, useState } from 'react';

import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';

import ListItem from '@/components/ListItem/ListItem';

import { useBoardContext } from '@/hooks/useBoardContext';

import type { DraggableData } from '@/types/draggable-data';

// dndContext : تمام کامپوننت‌هایی که قرار است قابلیت کشیدن و رها کردن داشته باشند، باید داخل
// DndContext قرار بگیرند.

type Props = PropsWithChildren;

const DndProvider = ({ children }: Props): ReactNode => {
  const { dispatchLists } = useBoardContext();
  const [activeData, setActiceData] = useState<DraggableData | null>(null);
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

  const handleDragStart = (e: DragStartEvent): void => {
    setActiceData(e.active.data.current as DraggableData);
  };

  const handleDragEnd = (e: DragEndEvent): void => {
    setActiceData(null);

    if (!e.over) {
      return;
    }

    dispatchLists({
      type: 'item_dragged_end',
      activeListIndex: e.active.data.current!.listIndex,
      activeItemIndex: e.active.data.current!.itemIndex,
      overItemIndex: e.over.data.current!.itemIndex,
    });
  };
  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {children}
      <DragOverlay>
        {activeData &&
          (activeData.isList ? null : (
            <ListItem
              presentational={true}
              listIndex={activeData.listIndex}
              itemIndex={activeData.itemIndex}
              item={activeData.item}
            />
          ))}
      </DragOverlay>
    </DndContext>
  );
};
export default DndProvider;
