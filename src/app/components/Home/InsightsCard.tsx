import React from "react";
import { Card } from "@/app/components/Card";
import { ButtonPrimary } from "@/app/components/Buttons";

export const InsightsCard = () => {
  return (
    <Card className="bg-gradient-to-br from-white/5 to-[#000000] w-full p-6">
      <div className="flex flex-col h-full gap-6">
        <div className="flex text-[18px] leading-snug">AI Insights</div>
        <p className="max-w-[550px] text-neutral-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
          maximus metus. Cras non diam lacus.
        </p>
        <ButtonPrimary>Sign up</ButtonPrimary>
      </div>
    </Card>
  );
};
