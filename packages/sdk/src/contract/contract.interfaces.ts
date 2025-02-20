import type { TransactionResponse } from '@ethersproject/abstract-provider';

export interface BaseContractInterface {
  readonly address: string;
}

export interface TransferContractInterface extends BaseContractInterface {
  transfer(): Promise<TransactionResponse>;
  getFee(amount: bigint): Promise<bigint>;
}

export interface BalanceContractInterface extends BaseContractInterface {
  getBalance(): Promise<bigint>;
  getDecimals(): Promise<number>;
}
