import React, { useEffect, useRef, useState } from "react";
import { Asset, GroupedAsset } from "@/app/lib/types";
import AssetRowContent from "@/app/components/Home/SidePanel/AssetRowContent";
import { GroupedAssetBreakdown } from "@/app/components/Home/SidePanel/GroupedAssetRow";
import { FALLBACK_IMAGE } from "@/app/utils/constats";

export const AssetRow = ({ asset }: { asset: Asset | GroupedAsset }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isGrouped = "assets" in asset;
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  const handleToggle = () => {
    if (isGrouped) {
      setIsExpanded((prev) => !prev);
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [asset]);

  return (
    <div
      className={`px-2 ${isExpanded ? "bg-white/5" : ""} rounded-xl uppercase transition-all duration-500 ease-in-out hover:bg-white/5 ${
        isGrouped ? "cursor-pointer" : ""
      }`}
      onClick={handleToggle}
    >
      <div className="grid grid-cols-[minmax(50px,1fr)_minmax(50px,1fr)_minmax(50px,1fr)] p-2 items-center gap-2 text-[13px] text-white leading-snug">
        {isGrouped ? (
          <>
            <GroupedAssetRow asset={asset} isExpanded={isExpanded} />
          </>
        ) : (
          <SingleAsset asset={asset} />
        )}
      </div>

      {isGrouped && (
        <div
          ref={contentRef}
          className={`overflow-hidden transition-all duration-500 ease-in-out px-3 ${
            isExpanded ? "opacity-100" : "opacity-0"
          }`}
          style={{ height: isExpanded ? `${contentHeight}px` : "0px" }}
        >
          <GroupedAssetBreakdown asset={asset} />
        </div>
      )}
    </div>
  );
};

const SingleAsset = ({ asset }: { asset: Asset }) => {
  return (
    <AssetRowContent
      logo={asset.logo ?? FALLBACK_IMAGE}
      tokenName={asset.tokenName}
      secondaryLabel={asset.chainId}
      usdValue={asset.usdValue}
      amount={asset.amount}
    />
  );
};

const GroupedAssetRow = ({
  asset,
  isExpanded,
}: {
  asset: GroupedAsset;
  isExpanded: boolean;
}) => {
  return (
    <>
      <AssetRowContent
        logo={asset.assets[0].logo ?? FALLBACK_IMAGE}
        tokenName={asset.tokenName}
        secondaryLabel={`${asset.assets.length} Chains`}
        usdValue={asset.usdValue}
        amount={asset.amount}
        isExpanded={isExpanded}
        showChevron={true}
      />
    </>
  );
};
