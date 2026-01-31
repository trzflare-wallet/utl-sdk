import { Connection } from '@trezoa/web3.js'
import { ChainId } from "../types";

const DEFAULT_CHAIN_ID = ChainId.MAINNET;
const DEFAULT_PROVIDER_URL = 'https://api.mainnet-beta.trezoa.com/';
const DEFAULT_API_URL = 'https://token-list-api.trezoa.cloud';
const DEFAULT_CDN_URL = 'https://cdn.jsdelivr.net/gh/trzflare-wallet/token-list/trezoa-tokenlist.json';
const DEFAULT_TIMEOUT = 2000;
const DEFAULT_METAPLEX_TIMEOUT = 5000;

export class UtlConfig {
  /**
   * Chain id - unique chain id (mainnet 101, testnet 102, devnet 103)
   */
  chainId = DEFAULT_CHAIN_ID;

  /**
   * Trezoa web3 connection
   */
  connection = new Connection(DEFAULT_PROVIDER_URL);

  /**
   * URL of unified token list backend
   */
  apiUrl = DEFAULT_API_URL;

  /**
   * URL where unified token list JSON is hosted
   */
  cdnUrl = DEFAULT_CDN_URL;

  /**
   * Number of miliseconds to wait for token list backend to respond
   */
  timeout = DEFAULT_TIMEOUT;

  /**
   * Number of miliseconds to wait for arweave to respond
   */
  metaplexTimeout = DEFAULT_METAPLEX_TIMEOUT;

  constructor(configOverrides: Partial<UtlConfig> = {}) {
    Object.assign(this, configOverrides);
  }
}
