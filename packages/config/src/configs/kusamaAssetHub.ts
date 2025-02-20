import {
  AssetMinBuilder,
  BalanceBuilder,
  ExtrinsicBuilder,
  FeeBuilder,
} from '@moonbeam-network/xcm-builder';
import { ksm, rmrk, usdt } from '../assets';
import { kusamaAssetHub, moonriver } from '../chains';
import { AssetConfig } from '../types/AssetConfig';
import { ChainConfig } from '../types/ChainConfig';

export const kusamaAssetHubConfig = new ChainConfig({
  assets: [
    new AssetConfig({
      asset: rmrk,
      balance: BalanceBuilder().substrate().assets().account(),
      destination: moonriver,
      destinationFee: {
        amount: FeeBuilder().assetManager().assetTypeUnitsPerSecond(),
        asset: rmrk,
      },
      extrinsic: ExtrinsicBuilder()
        .polkadotXcm()
        .limitedReserveTransferAssets()
        .X2(),
      fee: {
        asset: ksm,
        balance: BalanceBuilder().substrate().system().account(),
      },
      min: AssetMinBuilder().assets().asset(),
    }),
    new AssetConfig({
      asset: usdt,
      balance: BalanceBuilder().substrate().assets().account(),
      destination: moonriver,
      destinationFee: {
        amount: FeeBuilder().assetManager().assetTypeUnitsPerSecond(),
        asset: usdt,
      },
      extrinsic: ExtrinsicBuilder()
        .polkadotXcm()
        .limitedReserveTransferAssets()
        .X2(),
      fee: {
        asset: ksm,
        balance: BalanceBuilder().substrate().system().account(),
      },
      min: AssetMinBuilder().assets().asset(),
    }),
  ],
  chain: kusamaAssetHub,
});
