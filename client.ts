const programId = new web3.PublicKey(
    "7Z7weULhADbFKFYrZAqr3aMd7VjewqC7LidiY4UFzXMP"
  );
  
  async function sayHello(
    payer: web3.Keypair
  ): Promise<web3.TransactionSignature> {
    const transaction = new web3.Transaction();
  
    const instruction = new web3.TransactionInstruction({
      keys: [],
      programId,
    });
  
    transaction.add(instruction);
  
    const TransactionSignature = await web3.sendAndConfirmTransaction(
      pg.connection,
      transaction,
      [payer]
    );
  
    return TransactionSignature;
  }
  
  async function main() {
    const TransactionSignature = await sayHello(pg.wallet.keypair);
  
    console.log(
      `Transaction: https://explorer.solana.com/tx/${transactionSignature}?cluster=devnet`
    );
  }
  
  main();
  
  // Solana Explorer: https://explorer.solana.com/tx/3h6VhPkEBuin4Zk8SYic98L2uW274h6pWZcEMAar5Xq4FbKtMLzaAojtFeGoDEf9mreh6pEExFHQVn7T6nVDMrmH?cluster=devnet
  