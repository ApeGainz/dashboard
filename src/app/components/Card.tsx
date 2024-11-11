import React, { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`border rounded-[21px] border-white/10 p-3 ${className}`}>
      {children}
    </div>
  );
};
