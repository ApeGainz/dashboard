import { ChainId } from "@/app/lib/types";
import millify from "millify";

export function getChainName(chainId: ChainId): string {
    const chainNames: { [key in ChainId]: string } = {
        arb: "Arbitrum",
        eth: "Ethereum",
        base: "Base",
        bsc: "Binance Smart Chain",
        matic: "Matic",
    };
    return chainNames[chainId];
}

export const formatAmount = (value: string): string => {
    const numericValue = parseFloat(value);

    return numericValue >= 10_000
        ? millify(numericValue, { precision: 1 })
        : numericValue.toFixed(4);
};

export const formatUsdValue = (value: string): [number, number] => {
    const parsedValue = parseFloat(value);

    const dollars = Math.floor(parsedValue);
    const cents = Math.round((parsedValue - dollars) * 100);

    return [dollars, cents];
};
