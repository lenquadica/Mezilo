// frontend/src/utils/blockchain.ts

import * as SHA256 from 'crypto-js/sha256';

export function calculateHash(block: any) {
  const blockData = JSON.stringify(block);
  return SHA256(blockData).toString();
}

export function isValidBlock(newBlock: any, previousBlock: any) {
  // Check if the block's previous hash matches the last block's hash
  if (newBlock.previous_hash !== previousBlock.hash) {
    return false;
  }

  // Validate the block's hash (you can adjust the difficulty here if needed)
  if (calculateHash(newBlock) !== newBlock.hash) {
    return false;
  }

  return true;
}

export function createNewBlock(previousBlock: any, transactions: any[], nonce: number) {
  const index = previousBlock.index + 1;
  const timestamp = Date.now();
  const hash = calculateHash({ index, previous_hash: previousBlock.hash, timestamp, transactions, nonce });

  return {
    index,
    previous_hash: previousBlock.hash,
    timestamp,
    transactions,
    nonce,
    hash
  };
}
