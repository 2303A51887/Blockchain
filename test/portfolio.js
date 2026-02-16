const { expect } = require("chai");

describe("Portfolio Contract", function () {
  it("Should store and retrieve profile data", async function () {
    const Portfolio = await ethers.getContractFactory("Portfolio");
    const portfolio = await Portfolio.deploy();
    await portfolio.waitForDeployment();

    await portfolio.setProfile(
      "Prashanth",
      "prashanth@gmail.com",
      "Blockchain, Python",
      "Smart Contract Developer"
    );

    const result = await portfolio.getProfile();

    expect(result[0]).to.equal("Prashanth");
    expect(result[1]).to.equal("prashanth@gmail.com");
    expect(result[2]).to.equal("Blockchain, Python");
    expect(result[3]).to.equal("Smart Contract Developer");
  });
});

