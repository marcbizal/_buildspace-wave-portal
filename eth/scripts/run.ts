import { ethers } from "hardhat";

async function main() {
  const [owner, randomPerson] = await ethers.getSigners();
  const waveContractFactory = await ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("Contract deployed to --", waveContract.address);
  console.log("Contract deployed by --", owner.address);

  let waveTxn = await waveContract.wave();
  await waveTxn.wait();

  waveTxn = await waveContract.connect(randomPerson).wave();
  await waveTxn.wait();

  await waveContract.getTotalWaves();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
