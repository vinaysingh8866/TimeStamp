import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NativeBaseProvider } from "native-base";
import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "../getLibrary";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <NativeBaseProvider isSSR>
        <Component {...pageProps} />
      </NativeBaseProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
