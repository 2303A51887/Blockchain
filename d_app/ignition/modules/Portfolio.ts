import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PortfolioModule = buildModule("PortfolioModule", (m) => {
  const portfolio = m.contract("Portfolio");

  return { portfolio };
});

export default PortfolioModule;