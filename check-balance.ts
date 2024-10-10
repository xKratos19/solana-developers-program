import "dotenv/config";
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  clusterApiUrl,
} from "@solana/web3.js";

import { airdropIfRequired } from "@solana-developers/helpers";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

console.log("Connected to devnet", connection.rpcEndpoint);

const publickKey = new PublicKey(
  "FErViK1coXwoyHmDDfbVpQrHkYx1xe1J7KE8MPJzUutG"
);

const balanceInLamports = await connection.getBalance(publickKey);

console.log("Balanta Wallet-ului : ", balanceInLamports);

console.log("Airdropping 1 SOL to wallet...");

await airdropIfRequired(
  connection,
  publickKey,
  1 * LAMPORTS_PER_SOL,
  0.5 * LAMPORTS_PER_SOL
);

console.log("Done");

const balanceInLamports2 = await connection.getBalance(publickKey);

console.log("Balanta Wallet-ului : ", balanceInLamports2);
