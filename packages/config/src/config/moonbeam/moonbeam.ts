import { AssetSymbol } from '../../constants';
import { MoonbeamXcmConfigs } from './moonbeam.interfaces';

import { ACA } from './assets/aca';
import { ASTR } from './assets/astr';
import { AUSD } from './assets/ausd';
import { BNC } from './assets/bnc';
import { DOT } from './assets/dot';
import { EQ } from './assets/eq';
import { EQD } from './assets/eqd';
import { GLMR } from './assets/glmr';
import { HDX } from './assets/hdx';
import { IBTC } from './assets/ibtc';
import { INTR } from './assets/intr';
import { PARA } from './assets/para';
import { PHA } from './assets/pha';
import { RING } from './assets/ring';
import { USDT } from './assets/usdt';

export const MOONBEAM_CONFIGS: MoonbeamXcmConfigs = {
  [AssetSymbol.ACA]: ACA,
  [AssetSymbol.ASTR]: ASTR,
  [AssetSymbol.AUSD]: AUSD,
  [AssetSymbol.BNC]: BNC,
  [AssetSymbol.EQ]: EQ,
  [AssetSymbol.EQD]: EQD,
  [AssetSymbol.DOT]: DOT,
  [AssetSymbol.GLMR]: GLMR,
  [AssetSymbol.HDX]: HDX,
  [AssetSymbol.IBTC]: IBTC,
  [AssetSymbol.INTR]: INTR,
  [AssetSymbol.PARA]: PARA,
  [AssetSymbol.PHA]: PHA,
  [AssetSymbol.RING]: RING,
  [AssetSymbol.USDT]: USDT,
};
