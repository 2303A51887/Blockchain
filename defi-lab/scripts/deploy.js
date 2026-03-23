const { ethers } = require("hardhat");

async function main() {
  const Lending = await ethers.getContractFactory("Lending");
  const lending = await Lending.deploy();

  await lending.deployed();

  console.log("Contract deployed to:", lending.address);
}

main().catch(console.error);