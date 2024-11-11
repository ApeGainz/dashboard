import React from "react";
import { ChildrenWithClassName } from "@/app/lib/types";

export const Title: React.FC<ChildrenWithClassName> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`text-[34px] leading-normal ${className}`}>{children}</div>
  );
};
