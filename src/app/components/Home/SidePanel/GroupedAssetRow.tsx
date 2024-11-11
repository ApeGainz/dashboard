import { GroupedAsset } from "@/app/lib/types";
import Image from "next/image";
import { BouncingContent } from "@/app/components/Typography/BouncingContent";
import { UsdValue } from "@/app/components/UsdValue";
import React from "react";
import { FALLBACK_IMAGE } from "@/app/utils/constats";

export const GroupedAssetBreakdown = ({ asset }: { asset: GroupedAsset }) => {
  return (
    <>
      <div className="border-t border-white/5 py-[10px] text-white/55 text-[12px] leading-snug tracking-wide">
        Breakdown
      </div>
      <div className="rounded-lg space-y-1 text-[16px] flex flex-col gap-y-2 pb-2">
        {asset.assets.map((subAsset, index) => (
          <div
            key={index}
            className="grid px-2 grid-cols-[21px_minmax(50px,1fr)_minmax(50px,1fr)_minmax(50px,1fr)] items-center gap-2 py-1 hover:bg-white/5 rounded-xl text-[13px] text-white leading-snug"
          >
            <div className="w-5 h-5">
              <Image
                src={subAsset.logo ?? FALLBACK_IMAGE}
                alt={subAsset.tokenSymbol}
                width={20}
                height={20}
                className="rounded-full w-full h-full"
                unoptimized={true}
              />
            </div>
            <div>
              <BouncingContent>{subAsset.tokenName}</BouncingContent>
              <p className="text-[8px] text-white/45">{subAsset.chainId}</p>
            </div>
            <div>
              $
              {parseFloat(subAsset.usdValue).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
            <UsdValue value={asset.usdValue} />
          </div>
        ))}
      </div>
    </>
  );
};
