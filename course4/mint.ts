require("dotenv").config();
import {
    getExplorerLink,
    getKeypairFromEnvironment,
} from "@solana-developers/helpers";
import { mintTo } from "@solana/spl-token";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

const user = getKeypairFromEnvironment("SECRET_KEY");

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
console.log("user", user.publicKey.toBase58());

const DECIMALS = 6;

const tokenMintAccount = new PublicKey(
    "BZ6y9XnnK98oRPwCsuNxPo4BEuRaUXncsubCVa69iCVb"
);
const destTokeAccountPublicKey = new PublicKey(
    "BZ6y9XnnK98oRPwCsuNxPo4BEuRaUXncsubCVa69iCVb"
);

const signature = await mintTo(
    connection,
    user,
    tokenMintAccount,
    destTokeAccountPublicKey,
    user,
    9 * 10 ** DECIMALS // 9 tokens * 10 la DECIMALS
);

const link = getExplorerLink("tx", signature, "devnet");
console.log("link", link);