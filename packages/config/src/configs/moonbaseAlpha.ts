import { BalanceBuilder, ContractBuilder } from '@moonbeam-network/xcm-builder';
import {
  alan,
  dev,
  eq,
  eqd,
  lit,
  nodl,
  paring,
  soon,
  tt1,
  tur,
  unit,
} from '../assets';
import {
  alphanetAssetHub,
  alphanetRelay,
  darwiniaPangoro,
  equilibriumAlphanet,
  litentryAlphanet,
  moonbaseAlpha,
  moonbaseBeta,
  nodleEden,
  subsocialAlphanet,
  turingAlphanet,
} from '../chains';
import { AssetConfig } from '../types/AssetConfig';
import { ChainConfig } from '../types/ChainConfig';

export const moonbaseAlphaConfig = new ChainConfig({
  assets: [
    new AssetConfig({
      asset: dev,
      balance: BalanceBuilder().substrate().system().account(),
      contract: ContractBuilder().Xtokens().transfer(),
      destination: equilibriumAlphanet,
      destinationFee: {
        amount: 4,
        asset: dev,
      },
    }),
    new AssetConfig({
      asset: dev,
      balance: BalanceBuilder().substrate().system().account(),
      contract: ContractBuilder().Xtokens().transfer(),
      destination: turingAlphanet,
      destinationFee: {
        amount: 0.00001,
        asset: dev,
      },
    }),
    new AssetConfig({
      asset: dev,
      balance: BalanceBuilder().substrate().system().account(),
      contract: ContractBuilder().Xtokens().transfer(),
      destination: moonbaseBeta,
      destinationFee: {
        amount: 0.0002,
        asset: dev,
      },
    }),
    new AssetConfig({
      asset: alan,
      balance: BalanceBuilder().evm().erc20(),
      contract: ContractBuilder().Xtokens().transferMultiCurrencies(),
      destination: moonbaseBeta,
      destinationFee: {
        amount: 0.0002,
        asset: dev,
      },
      fee: {
        asset: dev,
        balance: BalanceBuilder().substrate().system().account(),
      },
    }),
    // NOTE: Disabling because ws endpoint is not working
    // new AssetConfig({
    //   asset: auq,
    //   balance: BalanceBuilder().substrate().assets().account(),
    //   contract: ContractBuilder().Xtokens().transfer(),
    //   destination: uniqueAlpha,
    //   destinationFee: {
    //     amount: 0,
    //     asset: auq,
    //   },
    //   fee: {
    //     asset: dev,
    //     balance: BalanceBuilder().substrate().system().account(),
    //   },
    // }),
    new AssetConfig({
      asset: eq,
      balance: BalanceBuilder().substrate().assets().account(),
      contract: ContractBuilder().Xtokens().transfer(),
      destination: equilibriumAlphanet,
      destinationFee: {
        amount: 14,
        asset: eq,
      },
      fee: {
        asset: dev,
        balance: BalanceBuilder().substrate().system().account(),
      },
    }),
    new AssetConfig({
      asset: eqd,
      balance: BalanceBuilder().substrate().assets().account(),
      contract: ContractBuilder().Xtokens().transfer(),
      destination: equilibriumAlphanet,
      destinationFee: {
        amount: 4,
        asset: eqd,
      },
      fee: {
        asset: dev,
        balance: BalanceBuilder().substrate().system().account(),
      },
    }),
    new AssetConfig({
      asset: lit,
      balance: BalanceBuilder().substrate().assets().account(),
      contract: ContractBuilder().Xtokens().transfer(),
      destination: litentryAlphanet,
      destinationFee: {
        amount: 0.032,
        asset: lit,
      },
      fee: {
        asset: dev,
        balance: BalanceBuilder().substrate().system().account(),
      },
    }),
    new AssetConfig({
      asset: nodl,
      balance: BalanceBuilder().substrate().assets().account(),
      contract: ContractBuilder().Xtokens().transfer(),
      destination: nodleEden,
      destinationFee: {
        amount: 0.02,
        asset: nodl,
      },
      fee: {
        asset: dev,
        balance: BalanceBuilder().substrate().system().account(),
      },
    }),
    new AssetConfig({
      asset: paring,
      balance: BalanceBuilder().substrate().assets().account(),
      contract: ContractBuilder().Xtokens().transfer(),
      destination: darwiniaPangoro,
      destinationFee: {
        amount: 4,
        asset: paring,
      },
      fee: {
        asset: dev,
        balance: BalanceBuilder().substrate().system().account(),
      },
    }),
    new AssetConfig({
      asset: soon,
      balance: BalanceBuilder().substrate().assets().account(),
      contract: ContractBuilder().Xtokens().transfer(),
      destination: subsocialAlphanet,
      destinationFee: {
        amount: 0.4,
        asset: soon,
      },
      fee: {
        asset: dev,
        balance: BalanceBuilder().substrate().system().account(),
      },
    }),
    new AssetConfig({
      asset: tt1,
      balance: BalanceBuilder().substrate().assets().account(),
      contract: ContractBuilder().Xtokens().transfer(),
      destination: alphanetAssetHub,
      destinationFee: {
        amount: 5,
        asset: tt1,
      },
      fee: {
        asset: dev,
        balance: BalanceBuilder().substrate().system().account(),
      },
    }),
    new AssetConfig({
      asset: tur,
      balance: BalanceBuilder().substrate().assets().account(),
      contract: ContractBuilder().Xtokens().transfer(),
      destination: turingAlphanet,
      destinationFee: {
        amount: 0.2,
        asset: tur,
      },
      fee: {
        asset: dev,
        balance: BalanceBuilder().substrate().system().account(),
      },
    }),
    new AssetConfig({
      asset: unit,
      balance: BalanceBuilder().substrate().assets().account(),
      contract: ContractBuilder().Xtokens().transfer(),
      destination: alphanetRelay,
      destinationFee: {
        amount: 0.0506,
        asset: unit,
      },
      fee: {
        asset: dev,
        balance: BalanceBuilder().substrate().system().account(),
      },
    }),
  ],
  chain: moonbaseAlpha,
});
