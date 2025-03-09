import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { num } from "starknet";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isMainnet() {
  return process.env.NEXT_PUBLIC_NETWORK === "mainnet"
}

export const MESSAGE = "Starknet to be the first L2 to settle on both Bitcoin and Ethereum. Working towards truely realising the bitcoin vision: Decentralised low cost global payments system."

export const SUPPORTED_CHAINS = isMainnet()?[
  // { id: "starknet", name: "Starknet", plugin: "starknet" },
  { id: "ethereum", name: "Ethereum", plugin: "evm",chainId:1 },
  { id: "base", name: "Base", plugin: "evm",chainId:8453 },
  { id: "optimism", name: "Optimism", plugin: "evm",chainId:10 },
  // { id: "solana", name: "Solana", plugin: "solana" },
  { id: "arbitrum", name: "Arbitrum", plugin: "evm",chainId:42161 },
]: [
  // { id: "starknet", name: "Starknet", plugin: "starknet" },
  { id: "ethereum", name: "Ethereum", plugin: "evm",chainId:11155111 },
  { id: "base", name: "Base", plugin: "evm",chainId:84532 },
  { id: "optimism", name: "Optimism", plugin: "evm",chainId:11155420 },
  // { id: "solana", name: "Solana", plugin: "solana" },
  { id: "arbitrum", name: "Arbitrum", plugin: "evm",chainId:421614 },
]

export function shortAddress(
  _address: string | undefined,
  startChars = 4,
  endChars = 4,
) {
  if (!_address) return "";
  const x = num.toHex(num.getDecimalString(_address));
  return truncate(x, startChars, endChars);
}

export function truncate(str: string, startChars: number, endChars: number) {
  if (str.length <= startChars + endChars) {
    return str;
  }

  return `${str.slice(0, startChars)}...${str.slice(
    str.length - endChars,
    str.length,
  )}`;
}