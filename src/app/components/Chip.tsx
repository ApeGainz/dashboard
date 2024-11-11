import React from "react";
import { ChildrenWithClassName } from "@/app/lib/types";

export const Chip: React.FC<ChildrenWithClassName> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`p-[5px] rounded-lg flex flex-row gap-[3px] bg-white/10 ${className}`}
    >
      {children}
    </div>
  );
};
