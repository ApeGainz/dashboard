import React, { ButtonHTMLAttributes } from "react";

export type EVMAddress = `0x${string}`;
type ChainType = "EVM";
type PortfolioDirection = "positive" | "negative";
export type ChainId = "arb" | "eth" | "base" | "bsc" | "matic";

export type ChildrenWithClassName = {
  children: React.ReactNode;
  className?: string;
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  customStyle?: string;
}

export type Assets = (Asset | GroupedAsset)[];

type ChangeDataFromAPI = {
  usd_change: number;
  percentage_change: number;
  change_direction: PortfolioDirection;
};

export type GroupedAsset = {
  tokenName: string;
  assets: Asset[];
  usdValue: string;
  amount: string;
};

type ChangeData = {
  usdChange: number;
  percentageChange: number;
  changeDirection: PortfolioDirection;
};

export type PortfolioChangeFromAPI = {
  ["24hr"]: ChangeDataFromAPI;
};

export type PortfolioChange = {
  ["24hr"]: ChangeData;
};

export type AssetFromAPI = {
  token_name: string;
  token_symbol: string;
  chain_type: ChainType;
  chain_id: ChainId;
  amount: string;
  usd_value: string;
  token_address: EVMAddress | ChainId;
  decimals: string;
  price_usd: string;
  snapshot_date: string;
  logo: string;
  extra_data: null;
};

export type Asset = {
  tokenName: string;
  tokenSymbol: string;
  chainType: ChainType;
  chainId: ChainId;
  amount: string;
  usdValue: string;
  tokenAddress: EVMAddress | ChainId;
  decimals: string;
  priceUsd: string;
  snapshotDate: string;
  logo: string;
  extraData: null;
};

export type PortfolioFromAPI = {
  wallet_address: EVMAddress;
  chain_type: ChainType;
  total_usd_value: number;
  portfolio_change: PortfolioChangeFromAPI;
  assets: AssetFromAPI[];
};

export type Portfolio = {
  walletAddress: EVMAddress;
  chainType: ChainType;
  totalUsdValue: number;
  portfolioChange: PortfolioChange;
  assets: Asset[];
};

export type SortedPortfolio = {
  walletAddress: EVMAddress;
  chainType: ChainType;
  totalUsdValue: number;
  portfolioChange: PortfolioChange;
  assets: Assets;
  dust: GroupedAsset;
};

export type Other = {
  tokenName: "Other";
  usdValue: string;
  chainId: ChainId;
};
