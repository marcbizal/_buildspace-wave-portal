import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with account --", deployer.address);
  console.log("Account balance --", accountBalance.toString());

  const Token = await ethers.getContractFactory("WavePortal");
  const portal = await Token.deploy();

  console.log("WavePortal address --", portal.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
