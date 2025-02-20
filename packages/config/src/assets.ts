import { Asset } from '@moonbeam-network/xcm-types';

export const aca = new Asset({
  key: 'aca',
  originSymbol: 'ACA',
});

export const alan = new Asset({
  key: 'alan',
  originSymbol: 'ALAN',
});

export const astr = new Asset({
  key: 'astr',
  originSymbol: 'ASTR',
});

export const auq = new Asset({
  key: 'auq',
  originSymbol: 'AUQ',
});

export const aseed = new Asset({
  key: 'aseed',
  originSymbol: 'aSEED',
});

export const betaDEV = new Asset({
  key: 'beta-dev',
  originSymbol: 'betaDEV',
});

export const bnc = new Asset({
  key: 'bnc',
  originSymbol: 'BNC',
});

export const cfg = new Asset({
  key: 'cfg',
  originSymbol: 'CFG',
});

export const crab = new Asset({
  key: 'crab',
  originSymbol: 'CRAB',
});

export const csm = new Asset({
  key: 'csm',
  originSymbol: 'CSM',
});

export const dev = new Asset({
  key: 'dev',
  originSymbol: 'DEV',
});

export const dot = new Asset({
  key: 'dot',
  originSymbol: 'DOT',
});

export const eq = new Asset({
  key: 'eq',
  originSymbol: 'EQ',
});

export const eqd = new Asset({
  key: 'eqd',
  originSymbol: 'EQD',
});

export const dai = new Asset({
  key: 'dai',
  originSymbol: 'DAI',
});

export const glmr = new Asset({
  key: 'glmr',
  originSymbol: 'GLMR',
});

export const hdx = new Asset({
  key: 'hdx',
  originSymbol: 'HDX',
});

export const hko = new Asset({
  key: 'hko',
  originSymbol: 'HKO',
});

export const ibtc = new Asset({
  key: 'ibtc',
  originSymbol: 'IBTC',
});

export const intr = new Asset({
  key: 'intr',
  originSymbol: 'INTR',
});

export const kar = new Asset({
  key: 'kar',
  originSymbol: 'KAR',
});

export const kbtc = new Asset({
  key: 'kbtc',
  originSymbol: 'KBTC',
});

export const kint = new Asset({
  key: 'kint',
  originSymbol: 'KINT',
});

export const kma = new Asset({
  key: 'kma',
  originSymbol: 'KMA',
});

export const ksm = new Asset({
  key: 'ksm',
  originSymbol: 'KSM',
});

export const lit = new Asset({
  key: 'lit',
  originSymbol: 'LIT',
});

export const mgx = new Asset({
  key: 'mgx',
  originSymbol: 'MGX',
});

export const movr = new Asset({
  key: 'movr',
  originSymbol: 'MOVR',
});

export const nodl = new Asset({
  key: 'nodl',
  originSymbol: 'NODL',
});

export const para = new Asset({
  key: 'para',
  originSymbol: 'PARA',
});

export const paring = new Asset({
  key: 'paring',
  originSymbol: 'PARING',
});

export const pha = new Asset({
  key: 'pha',
  originSymbol: 'PHA',
});

export const ring = new Asset({
  key: 'ring',
  originSymbol: 'RING',
});

export const rmrk = new Asset({
  key: 'rmrk',
  originSymbol: 'RMRK',
});

export const sdn = new Asset({
  key: 'sdn',
  originSymbol: 'SDN',
});

export const soon = new Asset({
  key: 'soon',
  originSymbol: 'SOON',
});

export const teer = new Asset({
  key: 'teer',
  originSymbol: 'TEER',
});

export const tt1 = new Asset({
  key: 'tt1',
  originSymbol: 'TT1',
});

export const tur = new Asset({
  key: 'tur',
  originSymbol: 'TUR',
});

export const unit = new Asset({
  key: 'unit',
  originSymbol: 'Unit',
});

export const usdc = new Asset({
  key: 'usdc',
  originSymbol: 'USDC',
});

export const usdt = new Asset({
  key: 'usdt',
  originSymbol: 'USDT',
});

export const wbtc = new Asset({
  key: 'wbtc',
  originSymbol: 'WBTC',
});

export const weth = new Asset({
  key: 'weth',
  originSymbol: 'WETH',
});

export const wftm = new Asset({
  key: 'wftm',
  originSymbol: 'wFTM',
});

export const xrt = new Asset({
  key: 'xrt',
  originSymbol: 'XRT',
});

export const assetsList: Asset[] = [
  aca,
  alan,
  astr,
  auq,
  aseed,
  bnc,
  cfg,
  crab,
  csm,
  dai,
  dev,
  dot,
  eq,
  eqd,
  glmr,
  hdx,
  hko,
  ibtc,
  intr,
  kar,
  kbtc,
  kint,
  kma,
  ksm,
  lit,
  mgx,
  movr,
  nodl,
  para,
  paring,
  pha,
  ring,
  rmrk,
  sdn,
  soon,
  teer,
  tt1,
  tur,
  unit,
  usdc,
  usdt,
  xrt,
  wbtc,
  weth,
  wftm,
];

export const assetsMap = new Map<string, Asset>(
  assetsList.map((asset) => [asset.key, asset]),
);
