import { SubmittableExtrinsicFunction } from '@polkadot/api/types';
import { getTypeDef } from '@polkadot/types';
import { XcmVersion } from './ExtrinsicBuilder.interfaces';

export function getExtrinsicArgumentVersion(
  func?: SubmittableExtrinsicFunction<'promise'>,
  index: number = 0,
): XcmVersion {
  if (!func) return XcmVersion.v1;

  const { type } = func.meta.args[index];
  const instance = func.meta.registry.createType(type.toString());
  const raw = getTypeDef(instance?.toRawType());

  if (!raw.sub) {
    return XcmVersion.v1;
  }

  const versions = Array.isArray(raw.sub)
    ? raw.sub.map((x) => x.name)
    : [raw.sub.name];

  if (versions.includes(XcmVersion.v1)) {
    return XcmVersion.v1;
  }

  if (versions.includes(XcmVersion.v2)) {
    return XcmVersion.v2;
  }

  if (versions.includes(XcmVersion.v3)) {
    return XcmVersion.v3;
  }

  throw new Error("Can't find Xcm version");
}
