import {
  BalanceBuilder,
  ExtrinsicBuilder,
  FeeBuilder,
} from '@moonbeam-network/xcm-builder';
import { teer } from '../assets';
import { integritee, moonriver } from '../chains';
import { AssetConfig } from '../types/AssetConfig';
import { ChainConfig } from '../types/ChainConfig';

export const integriteeConfig = new ChainConfig({
  assets: [
    new AssetConfig({
      asset: teer,
      balance: BalanceBuilder().substrate().system().account(),
      destination: moonriver,
      destinationFee: {
        amount: FeeBuilder().assetManager().assetTypeUnitsPerSecond(),
        asset: teer,
      },
      extrinsic: ExtrinsicBuilder().xTokens().transfer(),
    }),
  ],
  chain: integritee,
});
