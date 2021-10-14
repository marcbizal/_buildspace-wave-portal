import { config } from "dotenv";
import { task } from "hardhat/config";
import type { HardhatUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-waffle";

config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

export default {
  solidity: "0.8.4",
  networks: {
    rinkby: {
      url: process.env.RINKBY_URL,
      accounts: [process.env.RINKBY_ACCOUNT_KEY],
    },
  },
} as HardhatUserConfig;
