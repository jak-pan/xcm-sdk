import {
  BalanceBuilder,
  ExtrinsicBuilder,
  FeeBuilder,
} from '@moonbeam-network/xcm-builder';
import { glmr, pha } from '../assets';
import { moonbeam, phala } from '../chains';
import { AssetConfig } from '../types/AssetConfig';
import { ChainConfig } from '../types/ChainConfig';

export const phalaConfig = new ChainConfig({
  assets: [
    new AssetConfig({
      asset: pha,
      balance: BalanceBuilder().substrate().system().account(),
      destination: moonbeam,
      destinationFee: {
        amount: FeeBuilder().assetManager().assetTypeUnitsPerSecond(),
        asset: pha,
      },
      extrinsic: ExtrinsicBuilder().xTransfer().transfer().here(),
    }),
    new AssetConfig({
      asset: glmr,
      balance: BalanceBuilder().substrate().assets().account(),
      destination: moonbeam,
      destinationFee: {
        amount: 0.01,
        asset: glmr,
      },
      extrinsic: ExtrinsicBuilder().xTransfer().transfer().X2(),
      fee: {
        asset: pha,
        balance: BalanceBuilder().substrate().system().account(),
      },
    }),
  ],
  chain: phala,
});
