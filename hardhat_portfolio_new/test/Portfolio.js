const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Portfolio Contract", function () {

  let Portfolio, portfolio;

  // Runs before each test
  beforeEach(async function () {

    // Get contract factory
    Portfolio = await ethers.getContractFactory("Portfolio");

    // Deploy contract with initial values
    portfolio = await Portfolio.deploy(
      "Prashanth",
      "Blockchain Developer",
      "Learning smart contracts"
    );

    await portfolio.waitForDeployment();
  });

  // Test 1: Check initial values
  it("Should return correct initial portfolio details", async function () {

    const data = await portfolio.getPortfolio();

    expect(data[0]).to.equal("Prashanth");
    expect(data[1]).to.equal("Blockchain Developer");
    expect(data[2]).to.equal("Learning smart contracts");
  });

  // Test 2: Update portfolio
  it("Should update portfolio details", async function () {

    await portfolio.updatePortfolio(
      "Prashanth B",
      "Web3 Engineer",
      "Building decentralized apps"
    );

    const data = await portfolio.getPortfolio();

    expect(data[0]).to.equal("Prashanth B");
    expect(data[1]).to.equal("Web3 Engineer");
    expect(data[2]).to.equal("Building decentralized apps");
  });

});