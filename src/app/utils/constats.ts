import {ChainId, SortedPortfolio} from "@/app/lib/types";

export const FALLBACK_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1024px-Icon-round-Question_mark.svg.png";

export const COLOR_SCHEME: Record<ChainId, string[]> = {
  matic: ["#4c1d95", "#3b0764", "#6b21a8", "#9333ea", "#c084fc", "#6366f1"],
  eth: ["#464A76", "#8A92B2", "#4e5a8a", "#4d4854", "#cccccc", "#ecebed"],
  bsc: ["#f59e0b", "#d97706", "#b45309", "#92400e", "#78350f", "#ea580c"],
  arb: ["#1e2e54", "#2f415e", "#3EAAFF", "#9DCCED", "#2352DD", "#eeeeee"],
  base: ["#0ea5e9", "#0284c7", "#0369a1", "#075985", "#2563eb", "#60a5fa"],
};

export const EMPTY_PORTFOLIO : SortedPortfolio = {
  walletAddress: "0x0000000000000000000000000000000000000000" as const,
  chainType: "EVM",
  totalUsdValue: 0,
  portfolioChange: {["24hr"]: {usdChange: 0, percentageChange: 0, changeDirection: "positive"}},
  assets: [],
  dust: {tokenName: "Dust", assets: [], usdValue: "0.00", amount: "0.0000"},
}

