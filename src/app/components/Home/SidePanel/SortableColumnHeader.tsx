import { ArrowUp } from "@/app/components/icons/ArrowUp";
import React from "react";

type SortableKeys = "tokenName" | "usdValue" | "amount";

interface SortableColumnHeaderProps {
  label: string;
  sortKey: SortableKeys;
  sortConfig: { key: SortableKeys; direction: "asc" | "desc" };
  onSort: (key: SortableKeys) => void;
}

const SortableColumnHeader: React.FC<SortableColumnHeaderProps> = ({
  label,
  sortKey,
  sortConfig,
  onSort,
}) => {
  const isActive = sortConfig.key === sortKey;
  const directionClass =
    isActive && sortConfig.direction === "desc" ? "rotate-180" : "";

  return (
    <div
      onClick={() => onSort(sortKey)}
      className={`flex gap-x-2 cursor-pointer items-center ${isActive ? "text-white" : "text-white/55"}`}
    >
      <span>{label}</span>
      <ArrowUp
        className={`w-3 h-3 transition-transform duration-300 ${directionClass}`}
      />
    </div>
  );
};

export default SortableColumnHeader;
