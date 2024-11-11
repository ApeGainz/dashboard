"use client";
import React, { useState } from "react";
import { Card } from "@/app/components/Card";
import { Asset, ChainId, Other } from "@/app/lib/types";
import { ChartHeader } from "@/app/components/Home/Chart/ChartHeader";
import { AssetDoughnutChart } from "@/app/components/Home/Chart/AssetsDoughnutChart";
import { ChainFilter } from "@/app/components/Home/Chart/ChainFilter";
import { AssetLegend } from "@/app/components/Home/Chart/AssetLegend";
import { COLOR_SCHEME } from "@/app/utils/constats";

export const AssetsByChainCard = ({ assets }: { assets: Asset[] }) => {
  const [selectedChain, setSelectedChain] = useState<ChainId>("bsc");
  const uniqueChains: ChainId[] = ["arb", "base", "bsc", "eth", "matic"];

  const filteredAssets = assets.filter(
    (asset) => asset.chainId === selectedChain,
  );

  const sortedAssets = filteredAssets
    .filter((asset) => parseFloat(asset.usdValue) >= 1)
    .sort((a, b) => parseFloat(b.usdValue) - parseFloat(a.usdValue));

  const topAssetsAndOthers: (Asset | Other)[] = sortedAssets.slice(0, 5);

  const otherAssetsTotalValue = sortedAssets
    .slice(5)
    .reduce((total, asset) => total + parseFloat(asset.usdValue), 0);

  if (otherAssetsTotalValue > 0) {
    topAssetsAndOthers.push({
      tokenName: "Other",
      usdValue: otherAssetsTotalValue.toString(),
      chainId: selectedChain,
    });
  }

  const totalPortfolioValue = topAssetsAndOthers.reduce(
    (total, asset) => total + parseFloat(asset.usdValue),
    0,
  );

  const colors = COLOR_SCHEME[selectedChain] || COLOR_SCHEME["bsc"];

  const handleChainFilterChange = (chainId: ChainId) => {
    setSelectedChain(chainId);
  };
  return (
    <div className="flex flex-grow pt-3">
      <Card className="w-full flex lg:flex-row flex-col p-4 gap-6">
        <div className="lg:w-1/3 w-full justify-center items-center flex">
          <AssetDoughnutChart data={topAssetsAndOthers} colors={colors} />
        </div>
        <div className="flex flex-col gap-4 lg:w-2/3">
          <ChartHeader
            chainId={selectedChain}
            totalValue={totalPortfolioValue}
          />
          <ChainFilter
            selectedChain={selectedChain}
            onChange={handleChainFilterChange}
            uniqueChains={uniqueChains}
          />
          <AssetLegend assets={topAssetsAndOthers} colors={colors} />
        </div>
      </Card>
    </div>
  );
};
