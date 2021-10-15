import type { AppProps } from "next/app";

import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={(provider) => new Web3Provider(provider)}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}
export default MyApp;
