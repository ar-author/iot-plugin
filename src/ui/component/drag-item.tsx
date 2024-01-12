import { pluginId } from "@/index";
import { useDrag } from "ahooks";
import React, { useRef } from "react";

export default function DragItem<T>({
  data,
  children,
}: React.PropsWithChildren<{ data: T }>) {
  const dragRef = useRef(null);

  useDrag(
    {
      pluginId,
      payload: data,
    },
    dragRef,
    {
      onDragStart: () => {
        console.log("onDragStart", data);
      },
      onDragEnd: () => {
        console.log("onDragEnd", data);
      },
    }
  );

  return (
    <div className="cursor-pointer" ref={dragRef}>
      {children}
    </div>
  );
}
