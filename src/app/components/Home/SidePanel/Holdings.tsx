import React, { useState } from "react";
import { Asset, Assets, GroupedAsset } from "@/app/lib/types";
import { AssetRow } from "@/app/components/Home/SidePanel/AssetRow";
import SortableColumnHeader from "@/app/components/Home/SidePanel/SortableColumnHeader";
import { DustRow } from "@/app/components/Home/SidePanel/DustRow";

const columns = [
  { label: "Asset", sortKey: "tokenName" as const },
  { label: "Total Value", sortKey: "usdValue" as const },
  { label: "Amount", sortKey: "amount" as const },
];

export default function Holdings({
  assets,
  dust,
}: {
  assets: Assets;
  dust: GroupedAsset;
}) {
  const [sortedAssets, setSortedAssets] = useState(assets);
  const [sortConfig, setSortConfig] = useState<{
    key: "tokenName" | "usdValue" | "amount";
    direction: "asc" | "desc";
  }>({ key: "usdValue", direction: "desc" });

  const handleSort = (key: "tokenName" | "usdValue" | "amount") => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedArray = [...assets].sort((a, b) => {
      const getValue = (item: Asset | GroupedAsset): number | string => {
        switch (key) {
          case "tokenName":
            return item.tokenName.replace(/[^a-zA-Z]/g, "").toLowerCase(); // only compare letters (i.e. for assets starting with (PoS))
          case "usdValue":
            return parseFloat(item.usdValue);
          case "amount":
            return parseFloat(item.amount);
          default:
            return 0;
        }
      };
      const aValue = getValue(a);
      const bValue = getValue(b);

      if (key === "tokenName") {
        return direction === "asc"
          ? String(aValue).localeCompare(String(bValue))
          : String(bValue).localeCompare(String(aValue));
      } else {
        return direction === "asc"
          ? (aValue as number) - (bValue as number)
          : (bValue as number) - (aValue as number);
      }
    });
    setSortedAssets(sortedArray);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div className="leading-snug text-[26px] font-white tracking-wide px-2">
        Holdings
      </div>
      <div className="pt-1 grid grid-cols-[minmax(90px,1fr)_minmax(90px,1fr)_minmax(90px,1fr)] gap-2 px-2 text-[12px] leading-snug">
        {columns.map((column) => (
          <SortableColumnHeader
            key={column.sortKey}
            label={column.label}
            sortKey={column.sortKey}
            sortConfig={sortConfig}
            onSort={handleSort}
          />
        ))}
      </div>
      <div className="max-h-[calc(100vh-273px)] mt-3 lg:gap-[10px] gap-[6px] flex flex-col min-h-[400px] overflow-y-scroll">
        {sortedAssets.map((asset, index) => (
          <AssetRow key={asset.tokenName + index} asset={asset} />
        ))}
        {dust.assets.length > 0 && <DustRow dust={dust} />}
      </div>
    </div>
  );
}
