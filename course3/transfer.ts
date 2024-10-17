require("dotenv").config();

import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));

const sender = getKeypairFromEnvironment("SECRET_KEY");
console.log("sender", sender.publicKey);

const recipient = new PublicKey("BZ6y9XnnK98oRPwCsuNxPo4BEuRaUXncsubCVa69iCVb");

const transaction = new Transaction();

const instruction = SystemProgram.transfer({
  lamports: 0.001 * LAMPORTS_PER_SOL,
  fromPubkey: sender.publicKey,
  toPubkey: recipient,
});

transaction.add(instruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [sender]);

console.log("signature", signature);