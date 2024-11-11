import {
  PortfolioFromAPI,
  Asset,
  GroupedAsset,
  SortedPortfolio,
  Portfolio,
} from "@/app/lib/types";
import camelize from "camelize-ts";
import {EMPTY_PORTFOLIO} from "@/app/utils/constats";

function camelizePortfolioData(data: PortfolioFromAPI): Portfolio {
  return camelize(data);
}

export async function fetchPortfolioData(): Promise<{
  sortedPortfolio: SortedPortfolio;
  assets: Asset[];
}> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/portfolio`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`Failed to fetch portfolio data: ${res.statusText}`);
      return {
        sortedPortfolio: EMPTY_PORTFOLIO,
        assets: []
      };
    }

    const data: PortfolioFromAPI = await res.json();

    if (!data || !Array.isArray(data.assets)) {
      console.error("Unexpected data format in portfolio response");
      return {
        sortedPortfolio: EMPTY_PORTFOLIO,
        assets: []
      };
    }

    const camelizedData = camelizePortfolioData(data);
    const { assets, dust } = groupAndSortAssets(camelizedData.assets);

    const sortedPortfolio: SortedPortfolio = {
      ...camelizedData,
      assets: assets,
      dust: dust,
    };

    return {
      sortedPortfolio,
      assets: camelizedData.assets,
    };
  } catch (error) {
    console.error("Error fetching or processing portfolio data:", error);
    return {
      sortedPortfolio: EMPTY_PORTFOLIO,
      assets: []
    }
  }
}

// group assets with same name into one and sort by descending usd value and filter out assets < 1usd into dust
export function groupAndSortAssets(assets: Asset[]): {
  assets: (Asset | GroupedAsset)[];
  dust: GroupedAsset;
} {
  const assetMap: { [key: string]: Asset[] } = {};

  assets.forEach((asset) => {
    if (!assetMap[asset.tokenName]) {
      assetMap[asset.tokenName] = [];
    }
    assetMap[asset.tokenName].push(asset);
  });

  const groupedAssets: (Asset | GroupedAsset)[] = [];
  const dustAssets: Asset[] = [];

  // after grouping tokens, go through their total usd values and separate dust tokens and single assets
  Object.entries(assetMap).forEach(([tokenName, assetArray]) => {
    const totalUsdValue = assetArray.reduce(
      (sum, asset) => sum + parseFloat(asset.usdValue),
      0,
    );

    if (totalUsdValue < 1) {
      dustAssets.push(...assetArray);
    } else if (assetArray.length === 1) {
      groupedAssets.push(assetArray[0]);
    } else {
      const totalAmount = assetArray
        .reduce((sum, asset) => sum + parseFloat(asset.amount), 0)
        .toFixed(4);
      groupedAssets.push({
        tokenName,
        assets: assetArray,
        usdValue: totalUsdValue.toFixed(2),
        amount: totalAmount,
      });
    }
  });

  groupedAssets.sort((a, b) => {
    const aValue = parseFloat(a.usdValue);
    const bValue = parseFloat(b.usdValue);
    return bValue - aValue;
  });

  const dust: GroupedAsset = {
    tokenName: "Dust",
    assets: dustAssets,
    usdValue: dustAssets
      .reduce((sum, asset) => sum + parseFloat(asset.usdValue), 0)
      .toFixed(2),
    amount: dustAssets
      .reduce((sum, asset) => sum + parseFloat(asset.amount), 0)
      .toFixed(4),
  };

  return { assets: groupedAssets, dust };
}
