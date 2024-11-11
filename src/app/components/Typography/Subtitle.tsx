import React from "react";
import { ChildrenWithClassName } from "@/app/lib/types";

export const Subtitle: React.FC<ChildrenWithClassName> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`text-[13px] text-[#a6a6a6] leading-snug ${className}`}>
      {children}
    </div>
  );
};
