import { getChainName } from "@/app/utils/helpers";
import { ChainId } from "@/app/lib/types";
import { BouncingContent } from "@/app/components/Typography/BouncingContent";
import { UsdValue } from "@/app/components/UsdValue";

export const ChartHeader = ({
  chainId,
  totalValue,
}: {
  chainId: ChainId;
  totalValue: number;
}) => (
  <div className="flex flex-col w-full">
    <BouncingContent className="leading-snug text-[26px] w-11/12">
      {getChainName(chainId)} Portfolio
    </BouncingContent>
    <div className="text-sm text-white/60 flex">
      Total Portfolio Value:&nbsp;
      <UsdValue value={totalValue.toString()} />
    </div>
  </div>
);
