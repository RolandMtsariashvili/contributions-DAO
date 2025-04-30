import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ContributeDAOModule = buildModule("ContributeDAOModule", (m) => {
  const dao = m.contract("ContributeDAO", []);
  return { dao };
});

export default ContributeDAOModule;
