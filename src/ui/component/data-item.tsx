import { IDataItem } from "@/type";
import React from "react";

export default function DataItem(props: IDataItem) {
  return (
    <div className="w-[128px] h-[100px] bg-[#f4f3fa] flex items-center justify-center flex-col">
      <img
        src={props.previewUrl}
        alt={props.name}
        className="w-[62px] h-[62px] object-contain"
      />
      <div className="text-[12px] text-[#403d57]">{props.name}</div>
    </div>
  );
}
