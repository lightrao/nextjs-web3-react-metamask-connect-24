import "@/styles/globals.css";

import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers"; // just import providers of ethers

// Creating Web3Provider Instance: The getLibrary function creates an instance of Web3Provider from ethers.js,
// wrapping around the MetaMask provider (window.ethereum).
const getLibrary = (provider, connector) => {
  return new Web3Provider(provider);
};

export default function App({ Component, pageProps }) {
  // Provider Initialization: When your DApp initializes (specifically, the Web3ReactProvider),
  // it calls getLibrary, passing window.ethereum as the provider.
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      {/* This Web3Provider instance is then used throughout your app to interact with the Ethereum blockchain. */}
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}

// Web3Provider serves as a bridge between your React application and the Ethereum blockchain,
// leveraging MetaMask as the user's wallet and gateway to the blockchain.
