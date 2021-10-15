import { InjectedConnector } from "@web3-react/injected-connector";

export const enum ChainId {
  Mainnet = 1,
  Ropsten = 3,
  Rinkeby = 4,
  Goerli = 5,
  Kovan = 42,
}

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [ChainId.Rinkeby],
});
