require("dotenv").config();
import {
    getExplorerLink,
    getKeypairFromEnvironment,
} from "@solana-developers/helpers";
import { createMint } from "@solana/spl-token";
import { clusterApiUrl, Connection } from "@solana/web3.js";

const user = getKeypairFromEnvironment("SECRET_KEY");

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
console.log("user", user.publicKey.toBase58());

const DECIMALS = 6;

const mint = await createMint(connection, user, user.publicKey, null, DECIMALS);
console.log("mint", mint);

const link = getExplorerLink("address", mint.toBase58(), "devnet");
console.log("link", link);