import React from "react";
import { Title } from "@/app/components/Typography/Title";
import { Subtitle } from "@/app/components/Typography/Subtitle";

interface HeadingProps {
  title: string;
  subtitle?: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-2">
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </div>
  );
};
