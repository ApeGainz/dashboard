import { formatUsdValue } from "@/app/utils/helpers";

export const UsdValue = ({
  value,
  size = "md",
}: {
  value: string;
  size?: "md" | "lg";
}) => {
  const [dollars, cents] = formatUsdValue(value);

  const dollarStyles =
    size === "lg" ? "text-[34px] leading-normal" : "text-[13px] leading-snug";
  const centStyles =
    size === "lg" ? "text-[21px] leading-[21px]" : "text-[10px] leading-snug ";

  return (
    <div className="flex items-baseline">
      <span className={`text-white ${dollarStyles}`}>${dollars}</span>
      <span className={`text-white/45 ${centStyles}`}>
        .{cents.toString().padStart(2, "0")}
      </span>
    </div>
  );
};
