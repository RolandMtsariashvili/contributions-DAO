import { viem } from "hardhat";

async function main() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const dao = await viem.getContractAt("ContributeDAO", contractAddress);

  await dao.write.createProject([
    "Test Project",
    "Test Description",
    "https://github.com/test/test",
  ]);

  const projectCount = await dao.read.projectCount();
  console.log("Project created with ID:", projectCount.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
