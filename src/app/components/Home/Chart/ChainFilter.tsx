import React from "react";
import { ChainId } from "@/app/lib/types";
import { getChainName } from "@/app/utils/helpers";

interface ChainFilterProps {
  selectedChain: ChainId;
  onChange: (chainId: ChainId) => void;
  uniqueChains: ChainId[];
}

export const ChainFilter: React.FC<ChainFilterProps> = ({
  selectedChain,
  onChange,
  uniqueChains,
}) => {
  return (
    <div className="text-white text-[20px] leading-normal flex flex-col gap-2 lg:text-left text-center">
      Chain
      <div className="flex lg:flex-row flex-wrap gap-3 mb-4 justify-center lg:justify-start">
        {uniqueChains.map((chainId) => (
          <label
            key={chainId}
            className="flex items-center space-x-2 text-white cursor-pointer"
          >
            <input
              type="radio"
              name="chain-filter"
              checked={selectedChain === chainId}
              onChange={() => onChange(chainId)}
              className="form-radio text-blue-500 bg-gray-900"
            />
            <span className="tracking-wide text-sm">
              {getChainName(chainId)}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
