import {
  BalanceBuilder,
  ExtrinsicBuilder,
} from '@moonbeam-network/xcm-builder';
import { alan, betaDEV, dev } from '../assets';
import { moonbaseAlpha, moonbaseBeta } from '../chains';
import { AssetConfig } from '../types/AssetConfig';
import { ChainConfig } from '../types/ChainConfig';

export const moonbaseBetaConfig = new ChainConfig({
  assets: [
    new AssetConfig({
      asset: dev,
      balance: BalanceBuilder().substrate().assets().account(),
      destination: moonbaseAlpha,
      destinationFee: {
        amount: 0.0002,
        asset: dev,
      },
      extrinsic: ExtrinsicBuilder().xTokens().transfer(),
      fee: {
        asset: betaDEV,
        balance: BalanceBuilder().substrate().system().account(),
      },
    }),
    new AssetConfig({
      asset: alan,
      balance: BalanceBuilder().substrate().assets().account(),
      destination: moonbaseAlpha,
      destinationFee: {
        amount: 0.0002,
        asset: dev,
      },
      extrinsic: ExtrinsicBuilder().xTokens().transferMultiCurrencies(),
      fee: {
        asset: betaDEV,
        balance: BalanceBuilder().substrate().system().account(),
      },
    }),
  ],
  chain: moonbaseBeta,
});
