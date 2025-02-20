/* eslint-disable import/no-extraneous-dependencies */
import { dot, moonbeam, polkadot } from '@moonbeam-network/xcm-config';
import { Sdk, TransferData } from '@moonbeam-network/xcm-sdk';
import { Keyring } from '@polkadot/api';
import { cryptoWaitReady } from '@polkadot/util-crypto';
import { ethers } from 'ethers';
import { setTimeout } from 'node:timers/promises';

// Moonbeam Signer ===========================================================

const moonbeamPrivateKey = '';
const provider = new ethers.providers.WebSocketProvider(moonbeam.ws, {
  chainId: moonbeam.id,
  name: moonbeam.name,
});
const ethersSigner = new ethers.Wallet(moonbeamPrivateKey, provider);

// Polkadot Signer ===========================================================

const polkadotPrivateKey = '';

await cryptoWaitReady();
const keyring = new Keyring({
  ss58Format: polkadot.ss58Format,
  type: 'sr25519',
});
const pair = keyring.createFromUri(polkadotPrivateKey);

// ===========================================================================

export function logBalances(data: TransferData): void {
  console.log(
    `Balance on ${data.source.chain.name} ${data.source.balance.toDecimal()} ${
      data.source.balance.symbol
    }`,
  );
  console.log(
    `Balance on ${
      data.destination.chain.name
    } ${data.destination.balance.toDecimal()} ${
      data.destination.balance.symbol
    }`,
  );
}

export function logTxDetails(data: TransferData): void {
  console.log(
    `\nYou can send min: ${data.min.toDecimal()} ${
      data.min.symbol
    } and max: ${data.max.toDecimal()} ${data.max.symbol} from ${
      data.source.chain.name
    } to ${
      data.destination.chain.name
    }. You will pay ${data.source.fee.toDecimal()} ${
      data.source.fee.symbol
    } fee on ${
      data.source.chain.name
    } and ${data.destination.fee.toDecimal()} ${
      data.destination.fee.symbol
    } fee on ${data.destination.chain.name}.`,
  );
}

export async function fromPolkadot() {
  console.log('\nTransfer from Polkadot to Moonbeam\n');

  const data = await Sdk().getTransferData({
    destinationAddress: ethersSigner.address,
    destinationKeyOrChain: moonbeam,
    keyOrAsset: dot,
    polkadotSigner: pair,
    sourceAddress: pair.address,
    sourceKeyOrChain: polkadot,
  });

  logBalances(data);
  logTxDetails(data);

  const amount = +data.min.toDecimal() * 2;

  console.log(`Sending from ${data.source.chain.name} amount: ${amount}`);

  const hash = await data.transfer(amount);

  console.log(`${data.source.chain.name} tx hash: ${hash}`);
}

export async function fromMoonbeam() {
  console.log('\nTransfer from Moonbeam to Polkadot\n');

  const data = await Sdk()
    .assets()
    .asset(dot)
    .source(moonbeam)
    .destination(polkadot)
    .accounts(ethersSigner.address, pair.address, {
      ethersSigner,
    });

  logBalances(data);
  logTxDetails(data);

  const amount = +data.min.toDecimal() * 2;

  console.log(`Sending from ${data.source.chain.name} amount: ${amount}`);

  const hash = await data.transfer(amount);

  console.log(`${data.source.chain.name} tx hash: ${hash}`);
}

async function main() {
  // disable unnecessary warning logs
  console.warn = () => null;
  console.clear();

  console.log(`\nMoonbeam address: ${ethersSigner.address}.`);
  console.log(`Polkadot address: ${pair.address}.`);

  await fromPolkadot();
  console.log('\nWaiting 30 seconds...');
  await setTimeout(30000);
  await fromMoonbeam();
}

main()
  .then(() => console.log('done!'))
  .catch(console.error)
  .finally(() => process.exit());
