import React from "react";
import Image from "next/image";
import { BouncingContent } from "@/app/components/Typography/BouncingContent";
import { UsdValue } from "@/app/components/UsdValue";
import { formatAmount } from "@/app/utils/helpers";
import { ChevronRightThin } from "@/app/components/icons/ChevronRight";

interface AssetRowContentProps {
  logo: string;
  tokenName: string;
  secondaryLabel: string;
  usdValue: string;
  amount: string;
  isExpanded?: boolean;
  showChevron?: boolean;
}

const AssetRowContent: React.FC<AssetRowContentProps> = ({
  logo,
  tokenName,
  secondaryLabel,
  usdValue,
  amount,
  isExpanded = false,
  showChevron = false,
}) => (
  <>
    <div className="pr-1 flex-row flex gap-2 w-full items-center">
      <div className="flex flex-shrink-0 w-5 h-5">
        <Image
          src={logo}
          alt={tokenName}
          width={20}
          height={20}
          className="rounded-full h-full w-full"
          unoptimized
        />
      </div>
      <div className="flex w-[calc(100%-30px)] flex-col flex-shrink">
        <BouncingContent className="tracking-wide text-[13px] text-white leading-snug">
          {tokenName}
        </BouncingContent>
        <div className="tracking-wide text-neutral-400 text-[12px]">
          <span className="uppercase tracking-wide">{secondaryLabel}</span>
        </div>
      </div>
    </div>
    <UsdValue value={usdValue} />
    <div className="flex justify-between items-center">
      <BouncingContent>{formatAmount(amount)}</BouncingContent>
      {showChevron && (
        <ChevronRightThin
          className={`transform transition-transform h-3 w-3 min-w-3 ml-1 duration-300 text-white/30 ${
            isExpanded ? "rotate-90" : ""
          }`}
        />
      )}
    </div>
  </>
);

export default AssetRowContent;
