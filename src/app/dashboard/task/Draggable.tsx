import React from "react";
import { useDraggable } from "@dnd-kit/core";

interface DroppableProps {
  children: React.ReactNode;
}

export default function Draggable({ children }: DroppableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="w-fit rounded-xl border-2 bg-neutral-800 px-4 py-2 dark:border-neutral-700"
    >
      {children}
    </div>
  );
}
