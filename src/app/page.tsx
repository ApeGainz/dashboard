import React from "react";
import AssetsOverview from "@/app/components/Home/SidePanel/AssetsOverview";
import { fetchPortfolioData } from "@/app/utils/fetchPortfolioData";
import { Heading } from "@/app/components/Heading";
import { InsightsCard } from "@/app/components/Home/InsightsCard";
import { AssetsByChainCard } from "@/app/components/Home/AssetsByChainCard";

export default async function Home() {
  const { sortedPortfolio, assets } = await fetchPortfolioData();
  const dust = sortedPortfolio.dust;

  return (
    <div className="lg:h-screen w-full h-full">
      <div className="flex flex-col-reverse gap-4 lg:flex-row h-full">
        <div className="flex flex-col w-full lg:w-2/3 h-full pt-8 pb-8 gap-6 px-6 lg:pr-0 lg:pl-[10%]">
          <Heading
            title="Dashboard"
            subtitle="Get an overview of all your assets"
          />
          <AssetsByChainCard assets={assets} />
          <InsightsCard />
        </div>
        <div className="flex pt-8 lg:w-1/3 w-full lg:border-l lg:border-white/10">
          <AssetsOverview data={sortedPortfolio} dust={dust} />
        </div>
      </div>
    </div>
  );
}
