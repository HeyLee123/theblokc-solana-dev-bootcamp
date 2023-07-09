import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'
import base58 from 'bs58'

async function main() {

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '')
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK)

    const tokenAccount = await token.createAccount(
        connection,
        signer,
        new Web3.PublicKey('9gL7c6yikv7mZGtw8VmNdYUJ2N8227V1ABr3By8MvxCp'),
        new Web3.PublicKey('9gL7c6yikv7mZGtw8VmNdYUJ2N8227V1ABr3By8MvxCp'),
    )    

    console.log('token account', tokenAccount.toBase58())
}

main()

