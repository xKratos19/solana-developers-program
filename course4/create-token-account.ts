require("dotenv").config();
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

const user = getKeypairFromEnvironment("SECRET_KEY");

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
console.log("user", user.publicKey.toBase58());

const tokenMintAccount = new PublicKey(
    "BZ6y9XnnK98oRPwCsuNxPo4BEuRaUXncsubCVa69iCVb"
);
const destUserPublicKey = new PublicKey(
    "BZ6y9XnnK98oRPwCsuNxPo4BEuRaUXncsubCVa69iCVb"
);

const destTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    user,
    tokenMintAccount,
    destUserPublicKey
);

console.log("destTokenAccount", destTokenAccount.address.toBase58());