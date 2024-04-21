import { useState } from "react";
import "./App.css";
import { english, generateMnemonic, mnemonicToAccount } from "viem/accounts";

function App() {
  const accounts: string[] = [];
  const creatWallet = () => {
    const mnemonic = generateMnemonic(english);
    for (let i = 0; i < 500; i++) {
      const wallet = mnemonicToAccount(mnemonic, {
        accountIndex: 1,
      });
      accounts.push(wallet.address);
    }
    alert("Wallets Created");
    console.log(accounts);
  };

  return (
    <>
      <button onClick={creatWallet}>Create Wallet</button>
    </>
  );
}

export default App;
