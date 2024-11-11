import { PortfolioChange } from "@/app/lib/types";
import { Chip } from "@/app/components/Chip";
import { TrendingDown } from "@/app/components/icons/TrendingDown";
import { UsdValue } from "@/app/components/UsdValue";
import { TrendingUp } from "@/app/components/icons/TrendingUp";

export default function PortfolioValue({
  totalUsdValue,
  totalChange,
}: {
  totalUsdValue: number;
  totalChange: PortfolioChange;
}) {
  const usdChange = totalChange["24hr"].usdChange.toFixed(2);
  const percentageChange = totalChange["24hr"].percentageChange.toFixed(2);
  const changeDirection = totalChange["24hr"].changeDirection;
  const changeColor =
    changeDirection === "positive" ? "text-[#96E6A1]" : "text-[#e83838]";

  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex">
        <UsdValue value={totalUsdValue.toString()} size="lg" />
        <span className="mt-auto ml-2 ">
          <Chip className={`${changeColor}`}>
            {changeDirection === "positive" ? (
              <TrendingUp className="h-3 w-3" />
            ) : (
              <TrendingDown className="h-3 w-3" />
            )}
            <span className="text-[10px]">{percentageChange}%</span>
          </Chip>
        </span>
      </div>

      <div className="text-[13px] leading-snug text-[#a6a6a6]">
        Your total portfolio is {changeDirection === "negative" ? "down" : "up"}
        <span className={`text-white`}>
          &nbsp;${Math.abs(Number(usdChange))}&nbsp;
        </span>
        in last&nbsp;
        <span className="text-white">24hrs</span>
      </div>
    </div>
  );
}
