import React from "react";
import { Asset, Other } from "@/app/lib/types";
import { BouncingContent } from "@/app/components/Typography/BouncingContent";

interface AssetLegendProps {
  assets: (Asset | Other)[];
  colors: string[];
}

export const AssetLegend: React.FC<AssetLegendProps> = ({ assets, colors }) => (
  <div className="lg:flex flex-col mt-auto hidden">
    <div className="text-white mb-2">Asset Breakdown</div>
    <div className="grid grid-cols-2 gap-x-4 text-xs">
      {assets.map((asset, index) => (
        <div key={index} className="flex items-center gap-x-2 py-2">
          <span
            className="w-2 h-full rounded-full"
            style={{ backgroundColor: colors[index] }}
          ></span>
          <BouncingContent className="text-white font-medium">
            {asset.tokenName}
          </BouncingContent>
          <span className="text-white/55">
            ${parseFloat(asset.usdValue).toFixed(2)}
          </span>
        </div>
      ))}
    </div>
  </div>
);
