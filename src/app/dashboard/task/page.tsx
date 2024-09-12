"use client";

import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Draggable from "./Draggable";
import Droppable from "./Droppable";

export default function App() {
  const [isDropped, setIsDropped] = useState(false);

  const draggableMarkup = <Draggable>Satria Bahari</Draggable>;

  const handleDragEnd = (event: any) => {
    if (event.over && event.over.id === 1) {
      setIsDropped(true);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped ? draggableMarkup : null}
      <Droppable id={1}>{isDropped ? draggableMarkup : "Drop here"}</Droppable>
    </DndContext>
  );
}
