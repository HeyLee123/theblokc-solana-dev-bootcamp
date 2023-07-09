import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'
import base58 from 'bs58'

//import{SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction} from '@solana/web3.js'

async function main(){
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodePk = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    const signer = Web3.Keypair.fromSecretKey(base58DecodePk)

    const tokenMint = await token.createMint(
        connection,
        signer,
        new Web3.PublicKey('9gL7c6yikv7mZGtw8VmNdYUJ2N8227V1ABr3By8MvxCp'),
        new Web3.PublicKey('9gL7c6yikv7mZGtw8VmNdYUJ2N8227V1ABr3By8MvxCp'),
        9,
    );

    console.log('tokenMint', tokenMint.toBase58());
    //tokenMint CKcnFWGRRqyLa3DgciPA7PQMtY7DNVjBcaYNu1D1tsgz

}

main()