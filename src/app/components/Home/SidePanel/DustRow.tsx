import Image from "next/image";
import { UsdValue } from "@/app/components/UsdValue";
import React from "react";
import { GroupedAsset } from "@/app/lib/types";
import { FALLBACK_IMAGE } from "@/app/utils/constats";
import { InfoIcon } from "@/app/components/icons/InfoIcon";

export const DustRow = ({ dust }: { dust: GroupedAsset }) => {
  return (
    <div
      className={`px-2 rounded-xl transition-all duration-500 ease-in-out hover:bg-white/5`}
    >
      <div className="grid grid-cols-[minmax(50px,1fr)_minmax(50px,1fr)_minmax(50px,1fr)] p-2 items-center gap-2 text-[13px] text-white leading-snug">
        <div className="pr-1 flex-col flex gap-2 w-full ">
          <div className="flex items-center flex-shrink-0 w-5 h-5 text-white/85">
            {dust.assets.slice(0, 3).map((token, index) => (
              <Image
                key={token.tokenName + token.tokenSymbol}
                src={token.logo ?? FALLBACK_IMAGE}
                alt={"Dust"}
                width={20}
                height={20}
                className={`rounded-full h-full w-full ${index > 0 ? "-ml-2" : ""}`}
                unoptimized
              />
            ))}
            {dust.assets.length > 3 && (
              <span className="ml-2">+{dust.assets.length - 3}</span>
            )}
          </div>
          <div className="flex w-[calc(100%-30px)] flex-col flex-shrink">
            <div className="tracking-wide text-neutral-400 text-[12px]">
              <span className="tracking-wide flex items-center gap-1">
                Dust Tokens
                <div className="relative group">
                  <InfoIcon className="w-3 h-3 hover:cursor-help" />
                  <div className="absolute left-1/2 -top-6  hidden group-hover:flex bg-neutral-600 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
                    Assets below $1 across various chains
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
        <UsdValue value={dust.usdValue} />
      </div>
    </div>
  );
};
