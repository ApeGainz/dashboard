"use client";
import React from "react";
import PortfolioValue from "@/app/components/Home/SidePanel/PortfolioValue";
import { Card } from "@/app/components/Card";
import Holdings from "@/app/components/Home/SidePanel/Holdings";
import { GroupedAsset, SortedPortfolio } from "@/app/lib/types";

export default function AssetsOverview({
  data,
  dust,
}: {
  data: SortedPortfolio;
  dust: GroupedAsset;
}) {
  const groupedAssets = data.assets;

  return (
    <div className="px-5 w-full">
      <div className="flex flex-col">
        <PortfolioValue
          totalUsdValue={data.totalUsdValue}
          totalChange={data.portfolioChange}
        />
        <div className="pt-[34px]">
          <Card className="">
            <Holdings assets={groupedAssets} dust={dust} />
          </Card>
        </div>
      </div>
    </div>
  );
}
